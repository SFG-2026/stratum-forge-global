import React from "react";
import { Button } from "../ui/Button";

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onContact }) => {
  return (
    <section className="relative flex flex-col justify-center items-center pt-24 sm:pt-36 pb-10 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* BIGGEST — Main headline: significantly larger on mobile to establish clear visual hierarchy over the logo */}
        <h1 className="text-[38px] xs:text-[46px] sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-[#0A2540] max-w-5xl leading-[1.08] sm:leading-[1.05] break-words">
          Technology Reimagined. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-brand-orange">
            Value Restored.
          </span>
        </h1>

        {/* MEDIUM — Supporting message (from BRAND_DATA) */}
        <p className="mt-4 sm:mt-7 text-sm sm:text-lg md:text-xl text-slate-600 max-w-3xl font-sans font-medium leading-relaxed px-1 sm:px-0">
          We help businesses recover value from surplus, refurbished and end-of-life technology 
          through responsible technology lifecycle solutions.
        </p>

        {/* BUTTON — Clear, action-oriented CTAs with comfortable sizing */}
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none">
          <Button
            variant="orange"
            size="lg"
            withArrow
            onClick={onExplore}
            className="w-full sm:w-auto text-sm sm:text-base font-extrabold px-6 py-3.5 sm:px-10 sm:py-4 shadow-lg shadow-orange-500/25 active:scale-95 transition-all"
          >
            Explore Our Services
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={onContact}
            className="w-full sm:w-auto text-sm sm:text-base font-bold px-6 py-3.5 sm:px-10 sm:py-4 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-sm active:scale-95 hover:bg-white hover:border-blue-400 transition-all"
          >
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};
