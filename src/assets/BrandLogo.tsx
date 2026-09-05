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
    sm: { imgHeight: "h-9", textMain: "text-lg", textSub: "text-[9px]" },
    md: { imgHeight: "h-11 sm:h-12", textMain: "text-xl sm:text-2xl", textSub: "text-[10px]" },
    lg: { imgHeight: "h-14 sm:h-16", textMain: "text-2xl sm:text-3xl", textSub: "text-xs" },
    xl: { imgHeight: "h-20 sm:h-24", textMain: "text-3xl sm:text-4xl", textSub: "text-sm" },
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3.5 select-none group cursor-pointer ${className}`}>
      {/* Official StratumForge 3D Emblem with Transparent Background */}
      <div className="relative flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <img
          src="/logo.png"
          alt="StratumForge Global"
          className={`${current.imgHeight} w-auto object-contain drop-shadow-md`}
        />
      </div>

      {/* Typography */}
      {variant === "full" && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline tracking-tight font-display font-black text-[#0A2540] leading-none">
            <span className={`${current.textMain} tracking-[0.04em]`}>STRATUM</span>
            <span className={`${current.textMain} tracking-[0.04em] text-blue-600 ml-1`}>FORGE</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className={`font-mono font-extrabold tracking-[0.4em] text-slate-600 ${current.textSub}`}>
              GLOBAL
            </span>
            <div className="h-[2px] w-4 bg-brand-orange rounded-full" />
            <div className="h-[2px] w-8 bg-blue-500 rounded-full" />
          </div>
          {showTagline && (
            <span className="text-xs text-slate-500 font-sans tracking-wide mt-1 font-medium">
              Technology Reimagined. Value Restored.
            </span>
          )}
        </div>
      )}
    </div>
  );
};
