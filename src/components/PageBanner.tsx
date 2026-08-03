import React from 'react';

interface PageBannerProps {
  title?: string;
  badge?: string;
  subtitle?: string;
  bgImage?: string;
  isGradientText?: boolean;
  children?: React.ReactNode;
}

export default function PageBanner({ title, badge, subtitle, bgImage = '/edumentora%20bg%20image.png', isGradientText = false, children }: PageBannerProps) {
  return (
    <div className="w-full bg-[#F9F9F9] min-h-[300px] md:min-h-[400px] relative overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full py-12 md:py-20">
        {children ? (
          children
        ) : (
          <div className="text-center">
            {badge && (
              <div className="inline-block px-4 py-1.5 bg-red-50/90 font-bold tracking-wider uppercase rounded-full mb-4 md:mb-6 text-xs md:text-sm border border-red-100 backdrop-blur-md shadow-sm">
                <span className={isGradientText ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-blue-600" : "text-[#da251d]"}>{badge}</span>
              </div>
            )}
            {title && (
              <h1 className={`text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto mb-4 md:mb-6 tracking-tight font-serif ${isGradientText ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-blue-600" : "text-[#0B1727]"}`}>
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-[#172A53]/90 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
