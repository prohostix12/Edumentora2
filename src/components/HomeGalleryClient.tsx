'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HomeGalleryClient({ images }: { images: string[] }) {
  const [isClient, setIsClient] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const rotationRef = useRef(rotation);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isHovered) {
        // Rotate continuously (e.g., slower speed)
        rotationRef.current -= 5 * (deltaTime / 1000);
        setRotation(rotationRef.current);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isClient, isHovered]);

  if (!isClient) {
    return <div className="w-full h-[80vh] bg-transparent flex items-center justify-center">Loading Gallery...</div>;
  }

  // Ensure we have at least a few images to make a decent cylinder.
  // If fewer than 4, we could duplicate, but let's assume we have up to 8.
  const displayImages = images.length > 0 ? images : [];
  
  if (displayImages.length === 0) return null;

  const numImages = displayImages.length;
  const SLICES_PER_IMAGE = 10;
  
  // Angle allocated for each image + its gap
  const segmentAngle = 360 / numImages;
  
  // 5% of the segment is gap, 95% is the image
  const gapPercentage = 0.05;
  const imageAngle = segmentAngle * (1 - gapPercentage);
  const sliceAngle = imageAngle / SLICES_PER_IMAGE;
  
  // Base item width
  const itemWidth = 320;
  const sliceWidth = itemWidth / SLICES_PER_IMAGE;
  
  // Calculate the radius so that slices form a perfect smooth curve for their angle
  const radius = Math.round((sliceWidth / 2) / Math.tan((sliceAngle * Math.PI / 180) / 2));

  return (
    <div className="relative w-full h-[60vh] bg-transparent flex flex-col items-center justify-center overflow-hidden [perspective:1200px]">
      
      {/* 3D Cylinder Container */}
      <div
        className="relative w-[32px] h-[60%] min-h-[300px] [transform-style:preserve-3d]"
        style={{ transform: `rotateY(${rotation}deg)` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {displayImages.map((img, imgIndex) => {
          return Array.from({ length: SLICES_PER_IMAGE }).map((_, sliceIndex) => {
            
            // Center the slices around the main angle for this image
            const offsetAngle = (sliceIndex - (SLICES_PER_IMAGE - 1) / 2) * sliceAngle;
            const angle = (imgIndex * segmentAngle) + offsetAngle;
            
            // Calculate background position so the image spans across its slices
            const bgPos = `${(sliceIndex / (SLICES_PER_IMAGE - 1)) * 100}% center`;
            
            // We only show the border on the first and last slices to emulate the card edges
            const isFirst = sliceIndex === 0;
            const isLast = sliceIndex === SLICES_PER_IMAGE - 1;

            return (
              <React.Fragment key={`${imgIndex}-${sliceIndex}`}>
                {/* Front face with image */}
                <div
                  className="absolute top-0 left-0 h-full overflow-hidden"
                  style={{
                    width: `${sliceWidth}px`,
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden',
                    backgroundImage: `url(${img})`,
                    backgroundSize: `${itemWidth}px 100%`,
                    backgroundPosition: bgPos,
                    // Add border to emulate card thickness on edges
                    borderLeft: isFirst ? '4px solid white' : 'none',
                    borderRight: isLast ? '4px solid white' : 'none',
                    borderTop: '4px solid white',
                    borderBottom: '4px solid white',
                    // Small border radius on corners
                    borderTopLeftRadius: isFirst ? '1rem' : '0',
                    borderBottomLeftRadius: isFirst ? '1rem' : '0',
                    borderTopRightRadius: isLast ? '1rem' : '0',
                    borderBottomRightRadius: isLast ? '1rem' : '0',
                    // Eliminate tiny gaps between slices
                    marginLeft: '-0.5px',
                    marginRight: '-0.5px'
                  }}
                />
                {/* Back face with light gray color */}
                <div
                  className="absolute top-0 left-0 h-full overflow-hidden bg-gray-200"
                  style={{
                    width: `${sliceWidth}px`,
                    transform: `rotateY(${angle}deg) translateZ(${radius}px) rotateY(180deg)`,
                    backfaceVisibility: 'hidden',
                    // Reversing borders because of 180deg rotation
                    borderRight: isFirst ? '4px solid white' : 'none',
                    borderLeft: isLast ? '4px solid white' : 'none',
                    borderTop: '4px solid white',
                    borderBottom: '4px solid white',
                    // Small border radius on corners (reversed left/right)
                    borderTopRightRadius: isFirst ? '1rem' : '0',
                    borderBottomRightRadius: isFirst ? '1rem' : '0',
                    borderTopLeftRadius: isLast ? '1rem' : '0',
                    borderBottomLeftRadius: isLast ? '1rem' : '0',
                    // Eliminate tiny gaps between slices
                    marginLeft: '-0.5px',
                    marginRight: '-0.5px'
                  }}
                />
              </React.Fragment>
            );
          });
        })}
      </div>

    </div>
  );
}
