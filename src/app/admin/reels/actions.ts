'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export type ReelCategory = 'PROMO' | 'SUCCESS';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'videos', 'reels');

function revalidateFor() {
  revalidatePath('/admin/reels');
  revalidatePath('/');
}

async function saveVideoFile(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const ext = path.extname(file.name) || '.mp4';
  const filename = `${randomUUID()}${ext}`;
  await writeFile(path.join(UPLOAD_DIR, filename), buffer);
  return `/videos/reels/${filename}`;
}

async function deleteVideoFile(videoUrl: string) {
  if (!videoUrl.startsWith('/videos/reels/')) return; // only clean up files we manage; leave pre-existing static videos alone
  try {
    await unlink(path.join(process.cwd(), 'public', videoUrl));
  } catch {
    // file may already be gone — non-fatal
  }
}

export async function createReel(category: ReelCategory, formData: FormData) {
  const file = formData.get('video') as File | null;
  const url = (formData.get('videoUrl') as string | null)?.trim();

  let videoUrl: string;
  if (url) {
    videoUrl = url;
  } else if (file && file.size > 0) {
    videoUrl = await saveVideoFile(file);
  } else {
    return;
  }

  await prisma.reel.create({
    data: { category, videoUrl },
  });

  revalidateFor();
}

export async function updateReel(id: string, formData: FormData) {
  const file = formData.get('video') as File | null;
  const url = (formData.get('videoUrl') as string | null)?.trim();

  let videoUrl: string;
  if (url) {
    videoUrl = url;
  } else if (file && file.size > 0) {
    videoUrl = await saveVideoFile(file);
  } else {
    return;
  }

  const existing = await prisma.reel.findUnique({ where: { id } });

  await prisma.reel.update({
    where: { id },
    data: { videoUrl },
  });

  if (existing) await deleteVideoFile(existing.videoUrl);

  revalidateFor();
}

export async function deleteReel(id: string) {
  const existing = await prisma.reel.findUnique({ where: { id } });
  if (!existing) return;

  await prisma.reel.delete({ where: { id } });
  await deleteVideoFile(existing.videoUrl);

  revalidateFor();
}

// Used by the home page (server component) to fetch reels live.
export async function getPublicReels() {
  const reels = await prisma.reel.findMany({ orderBy: { createdAt: 'asc' } });
  return {
    promo: reels.filter((r) => r.category === 'PROMO').map((r) => r.videoUrl),
    success: reels.filter((r) => r.category === 'SUCCESS').map((r) => r.videoUrl),
  };
}
