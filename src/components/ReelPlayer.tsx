'use client';

import React from 'react';
import { getYouTubeEmbedUrl } from '@/lib/video';

export default function ReelPlayer({ src, className }: { src: string; className?: string }) {
  const embedUrl = getYouTubeEmbedUrl(src);

  if (embedUrl) {
    return (
      <iframe
        src={embedUrl}
        className={className}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return <video src={src} className={className} controls playsInline preload="metadata" />;
}
