import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const REGION = process.env.AWS_REGION as string;
const BUCKET = process.env.AWS_S3_BUCKET_NAME as string;

let client: S3Client | null = null;

function getClient(): S3Client {
  if (!REGION || !BUCKET || !process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    throw new Error(
      'S3 is not configured. Set AWS_REGION, AWS_S3_BUCKET_NAME, AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in .env.'
    );
  }
  if (!client) {
    client = new S3Client({
      region: REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }
  return client;
}

export function getS3PublicUrl(key: string): string {
  return `https://${BUCKET}.s3.${REGION}.amazonaws.com/${key}`;
}

// True only for objects living in our own managed bucket — as opposed to a
// pasted YouTube/Instagram/Vimeo link, or a legacy local /videos/... path —
// so callers know it's safe to issue an S3 delete against it.
export function isManagedS3Url(url: string): boolean {
  return BUCKET ? url.startsWith(`https://${BUCKET}.s3.`) && url.includes('.amazonaws.com/') : false;
}

function keyFromS3Url(url: string): string {
  return decodeURIComponent(new URL(url).pathname.replace(/^\//, ''));
}

// Mints a short-lived presigned PUT URL so the browser can upload the file
// bytes straight to S3, bypassing our server (and its Server Action body-size
// limit) entirely.
export async function getPresignedUploadUrl(key: string, contentType: string): Promise<string> {
  const command = new PutObjectCommand({ Bucket: BUCKET, Key: key, ContentType: contentType });
  return getSignedUrl(getClient(), command, { expiresIn: 300 });
}

export async function deleteS3Object(url: string): Promise<void> {
  if (!isManagedS3Url(url)) return;
  try {
    await getClient().send(new DeleteObjectCommand({ Bucket: BUCKET, Key: keyFromS3Url(url) }));
  } catch {
    // object may already be gone — non-fatal
  }
}
