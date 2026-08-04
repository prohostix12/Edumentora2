import React from 'react';

interface PageBannerProps {
  title?: string;
  badge?: string;
  subtitle?: string;
  bgImage?: string;
  isGradientText?: boolean;
  /** Overrides the banner's background classes. Defaults to the standard light look. */
  bgClassName?: string;
  /** Overrides the badge text color classes. Defaults to the standard red/gradient look. */
  badgeClassName?: string;
  /** Overrides the title text color classes. Defaults to the standard dark/gradient look. */
  titleClassName?: string;
  /** Overrides the subtitle text color classes. Defaults to the standard navy look. */
  subtitleClassName?: string;
  /** Overrides the bottom border classes. Defaults to the standard light blue-gray hairline. */
  borderClassName?: string;
  /** Overrides the badge pill's background/border classes. Defaults to the standard white pill. */
  badgePillClassName?: string;
  children?: React.ReactNode;
}

export default function PageBanner({
  title,
  badge,
  subtitle,
  bgImage: _bgImage,
  isGradientText: _isGradientText,
  bgClassName = 'bg-[#f8f3e6]',
  badgeClassName = 'text-[#da251d]',
  titleClassName = 'text-[#123F4A]',
  subtitleClassName = 'text-gray-600',
  borderClassName = 'border-[#172A53]/10',
  badgePillClassName = 'bg-white border-[#172A53]/10 shadow-sm',
  children,
}: PageBannerProps) {
  return (
    <div className={`w-full min-h-[300px] md:min-h-[400px] relative overflow-hidden flex items-center justify-center border-b ${borderClassName} ${bgClassName}`}>
      {/* Dot-grid background texture — matches the Home page Hero section exactly */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #172A53 1.5px, transparent 0)', backgroundSize: '26px 26px' }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full py-12 md:py-20">
        {children ? (
          <div className="[&_h1]:text-[#123F4A] [&_h1]:font-bold [&_h2]:text-[#123F4A] [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:font-medium [&_span]:text-gray-600">
            {children}
          </div>
        ) : (
          <div className="text-center">
            {badge && (
              <div className={`inline-block px-4 py-1.5 font-bold tracking-wider uppercase rounded-full mb-4 md:mb-6 text-xs md:text-sm border backdrop-blur-md shadow-sm ${badgePillClassName}`}>
                <span className={badgeClassName}>{badge}</span>
              </div>
            )}
            {title && (
              <h1 className={`text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto mb-4 md:mb-6 tracking-tight font-serif ${titleClassName}`}>
                {title}
              </h1>
            )}
            {subtitle && (
              <p className={`text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
