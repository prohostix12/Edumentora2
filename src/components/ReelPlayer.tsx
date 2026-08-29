'use client';

import React from 'react';
import { getEmbedInfo } from '@/lib/video';
import InstagramEmbed from '@/components/InstagramEmbed';
import IframePlayOverlay from '@/components/IframePlayOverlay';

// Not every embedded platform supports being told to autoplay via URL param
// (Instagram and Google Drive's preview iframe don't) — apply it only where
// it actually works, muted where required for the browser to honor it.
function withAutoplay(embedUrl: string, platform: string): string {
  const sep = embedUrl.includes('?') ? '&' : '?';
  switch (platform) {
    case 'youtube':
      return `${embedUrl}${sep}autoplay=1&mute=1`;
    case 'vimeo':
      return `${embedUrl}${sep}autoplay=1&muted=1`;
    case 'facebook':
      return `${embedUrl}${sep}autoplay=true`;
    default:
      return embedUrl;
  }
}

export default function ReelPlayer({
  src,
  className,
  autoPlay,
  onPlay,
  onPause,
  onEnded,
}: {
  src: string;
  className?: string;
  autoPlay?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}) {
  const embed = getEmbedInfo(src);

  if (embed?.platform === 'instagram') {
    return <InstagramEmbed url={src} className={className} onPlay={onPlay} onPause={onPause} />;
  }

  if (embed) {
    const embedUrl = autoPlay ? withAutoplay(embed.embedUrl, embed.platform) : embed.embedUrl;
    return (
      <IframePlayOverlay onPlay={onPlay} onPause={onPause} className={className}>
        <iframe
          src={embedUrl}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </IframePlayOverlay>
    );
  }

  return (
    <video
      src={src}
      className={className}
      controls
      autoPlay={autoPlay}
      playsInline
      preload="metadata"
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onEnded}
    />
  );
}
