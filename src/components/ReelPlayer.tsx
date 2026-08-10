'use client';

import React from 'react';
import { getEmbedInfo } from '@/lib/video';
import InstagramEmbed from '@/components/InstagramEmbed';

export default function ReelPlayer({
  src,
  className,
  onPlay,
  onPause,
  onEnded,
}: {
  src: string;
  className?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}) {
  const embed = getEmbedInfo(src);

  if (embed?.platform === 'instagram') {
    return <InstagramEmbed url={src} className={className} />;
  }

  if (embed) {
    return (
      <iframe
        src={embed.embedUrl}
        className={className}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <video
      src={src}
      className={className}
      controls
      playsInline
      preload="metadata"
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onEnded}
    />
  );
}
