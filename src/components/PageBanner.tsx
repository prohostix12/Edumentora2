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
  bgClassName = 'bg-gradient-to-br from-[#0d1b3d] via-[#132a5c] to-[#172A53]',
  badgeClassName = 'text-[#ff8577]',
  titleClassName = 'text-[#f4ecd8]',
  subtitleClassName = 'text-slate-300',
  borderClassName = 'border-white/10',
  badgePillClassName = 'bg-white/10 border-white/15',
  children,
}: PageBannerProps) {
  return (
    <div className={`w-full min-h-[300px] md:min-h-[400px] relative overflow-hidden flex items-center justify-center border-b ${borderClassName} ${bgClassName}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full py-12 md:py-20">
        {children ? (
          <div className="[&_h1]:text-[#f4ecd8] [&_h1]:font-bold [&_h2]:text-[#f4ecd8] [&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:font-medium [&_span]:text-slate-300">
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
