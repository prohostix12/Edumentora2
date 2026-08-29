export function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;

  const patterns = [
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{6,})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{6,})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{6,})/,
    /youtu\.be\/([a-zA-Z0-9_-]{6,})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
  }

  return null;
}

export function getInstagramEmbedUrl(url: string): string | null {
  if (!url) return null;

  const match = url.match(/instagram\.com\/(reel|reels|p|tv)\/([a-zA-Z0-9_-]+)/);
  if (!match) return null;

  return `https://www.instagram.com/${match[1]}/${match[2]}/embed`;
}

export function getFacebookEmbedUrl(url: string): string | null {
  if (!url) return null;
  if (!/facebook\.com|fb\.watch/.test(url)) return null;

  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`;
}

export function getVimeoEmbedUrl(url: string): string | null {
  if (!url) return null;

  const match = url.match(/vimeo\.com\/(\d+)/);
  if (!match) return null;

  return `https://player.vimeo.com/video/${match[1]}`;
}

export function getGoogleDriveEmbedUrl(url: string): string | null {
  if (!url) return null;

  // Covers the two share-link shapes Drive actually hands out:
  // .../file/d/<FILE_ID>/view?usp=sharing  and  ...?id=<FILE_ID> (open/uc links)
  const pathMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]{10,})/);
  const idParamMatch = url.match(/drive\.google\.com\/(?:open|uc)\?(?:[^#]*&)?id=([a-zA-Z0-9_-]{10,})/);
  const fileId = pathMatch?.[1] ?? idParamMatch?.[1];
  if (!fileId) return null;

  return `https://drive.google.com/file/d/${fileId}/preview`;
}

export type EmbedInfo = { platform: 'youtube' | 'instagram' | 'facebook' | 'vimeo' | 'googledrive'; embedUrl: string } | null;

// Tries every known platform embed. Returns null if the URL doesn't match any
// of them — callers should then fall back to treating it as a direct video
// file (local upload or a plain .mp4/.webm link) and render a <video> tag.
export function getEmbedInfo(url: string): EmbedInfo {
  const youtube = getYouTubeEmbedUrl(url);
  if (youtube) return { platform: 'youtube', embedUrl: youtube };

  const instagram = getInstagramEmbedUrl(url);
  if (instagram) return { platform: 'instagram', embedUrl: instagram };

  const facebook = getFacebookEmbedUrl(url);
  if (facebook) return { platform: 'facebook', embedUrl: facebook };

  const vimeo = getVimeoEmbedUrl(url);
  if (vimeo) return { platform: 'vimeo', embedUrl: vimeo };

  const googleDrive = getGoogleDriveEmbedUrl(url);
  if (googleDrive) return { platform: 'googledrive', embedUrl: googleDrive };

  return null;
}

// A URL is accepted as a video source if it's either a recognized platform
// link (YouTube/Instagram/Facebook/Vimeo) or just a syntactically valid
// absolute URL / local path — direct video files (including our own locally
// uploaded /videos/... files) can't be reliably probed cross-origin, so we
// don't require them to pass a loadability check, only to be well-formed.
export function isAcceptableVideoUrl(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) return false;
  if (getEmbedInfo(trimmed)) return true;
  if (trimmed.startsWith('/')) return true;

  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
