import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  variant?: "full" | "mark-only";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = "md",
  showTagline = false,
  variant = "full",
}) => {
  const sizeMap = {
    sm: { imgHeight: "h-7 sm:h-8", textMain: "text-sm sm:text-base", textSub: "text-[7.5px] sm:text-[8px]" },
    md: { imgHeight: "h-8 sm:h-10 md:h-11", textMain: "text-lg sm:text-xl md:text-2xl", textSub: "text-[8.5px] sm:text-[10px]" },
    lg: { imgHeight: "h-12 sm:h-14 md:h-16", textMain: "text-xl sm:text-2xl md:text-3xl", textSub: "text-[10px] sm:text-xs" },
    xl: { imgHeight: "h-16 sm:h-20 md:h-22", textMain: "text-2xl sm:text-3xl md:text-4xl", textSub: "text-xs sm:text-sm" },
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none group cursor-pointer ${className}`}>
      {/* Official StratumForge 3D Emblem with Hover Aura & Tilt Animation */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        {/* Ambient Hover Glow Ring */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500/30 via-blue-500/25 to-cyan-400/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 -z-10" />
        
        <img
          src="/logo.png"
          alt="StratumForge Global"
          className={`${current.imgHeight} w-auto object-contain drop-shadow-md transform group-hover:scale-110 group-hover:-rotate-3 group-hover:drop-shadow-[0_8px_16px_rgba(255,90,31,0.25)] transition-all duration-300 ease-out`}
        />
      </div>

      {/* Typography with Responsive Micro-Animations */}
      {variant === "full" && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline tracking-tight font-display font-black text-[#0A2540] leading-none">
            <span className={`${current.textMain} tracking-[0.03em] sm:tracking-[0.04em] transition-colors duration-200`}>
              STRATUM
            </span>
            <span className={`${current.textMain} tracking-[0.03em] sm:tracking-[0.04em] text-blue-600 ml-1 group-hover:text-blue-500 group-hover:drop-shadow-[0_2px_8px_rgba(37,99,235,0.25)] transition-all duration-300`}>
              FORGE
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 mt-1">
            <span className={`font-mono font-extrabold tracking-[0.3em] sm:tracking-[0.4em] group-hover:tracking-[0.46em] text-slate-600 group-hover:text-slate-900 transition-all duration-300 ${current.textSub}`}>
              GLOBAL
            </span>
            <div className="h-[2px] w-3 sm:w-4 group-hover:w-6 sm:group-hover:w-7 bg-brand-orange rounded-full group-hover:shadow-[0_0_8px_rgba(255,90,31,0.7)] transition-all duration-300" />
            <div className="h-[2px] w-5 sm:w-8 group-hover:w-8 sm:group-hover:w-12 bg-blue-500 rounded-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.7)] transition-all duration-300" />
          </div>

          {showTagline && (
            <span className="text-[10px] sm:text-xs text-slate-500 font-sans tracking-wide mt-1 font-medium line-clamp-1">
              Technology Reimagined. Value Restored.
            </span>
          )}
        </div>
      )}
    </div>
  );
};
