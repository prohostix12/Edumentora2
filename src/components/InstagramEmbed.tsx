'use client';

import React, { useEffect, useState } from 'react';
import { getInstagramEmbedUrl } from '@/lib/video';
import { useIframePlayOverlay } from '@/lib/useIframePlayOverlay';

// Instagram's raw embed page has roughly fixed pixel-height chrome (a header
// bar with the account/profile info, and a footer with like/comment/share
// icons + "View more on Instagram") that does NOT shrink just because the
// iframe box is smaller — unlike a photo, an iframe doesn't auto-scale its
// content to fit. So we render the iframe at Instagram's natural size, then
// use a JS-measured CSS scale() to shrink the whole thing to fit the actual
// container width, and crop by a pixel amount defined in that same natural
// coordinate space (which scales down correctly along with everything else).
// A Reels video itself is ~9:16, so at 400px width the video area alone is
// ~711px tall (400 * 16/9). Total natural height just needs to comfortably
// fit header + video + footer so nothing on Instagram's page gets truncated;
// the footer doesn't need explicit cropping math — our container is itself
// 9:16, so its own aspect ratio naturally ends exactly where the video ends
// (right where the footer begins), as long as HEADER_PX is accurate.
const NATURAL_WIDTH = 400;
const NATURAL_HEIGHT = 1000;
const HEADER_PX = 80;

export default function InstagramEmbed({ url, className, onPlay, onPause }: { url: string; className?: string; onPlay?: () => void; onPause?: () => void }) {
  const { containerRef, overlayRef } = useIframePlayOverlay({ onPlay, onPause });
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / NATURAL_WIDTH);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const embedUrl = getInstagramEmbedUrl(url);
  if (!embedUrl) return null;

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      {scale > 0 && (
        <iframe
          src={embedUrl}
          scrolling="no"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: NATURAL_WIDTH,
            height: NATURAL_HEIGHT,
            border: 'none',
            transformOrigin: 'top left',
            transform: `scale(${scale}) translateY(-${HEADER_PX}px)`,
          }}
        />
      )}
      <div ref={overlayRef} style={{ position: 'absolute', inset: 0, background: 'transparent', cursor: 'pointer' }} />
    </div>
  );
}
