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
    <div className="w-full bg-[#172A53] h-[300px] md:h-[400px] relative overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center" 
        style={{ backgroundImage: `url('${bgImage}')` }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {children ? (
          children
        ) : (
          <div className="text-center pt-8">
            {badge && (
              <div className="inline-block px-4 py-1.5 bg-white/10 font-bold tracking-wider uppercase rounded-full mb-4 md:mb-6 text-xs md:text-sm border border-white/20 backdrop-blur-md">
                <span className={isGradientText ? "text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400" : "text-red-200"}>{badge}</span>
              </div>
            )}
            {title && (
              <h1 className={`text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto mb-4 md:mb-6 tracking-tight font-[Poppins] ${isGradientText ? "text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400" : "text-white"}`}>
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
