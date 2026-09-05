import React, { useEffect, useState, useRef } from "react";
import { Cpu, Leaf, ShieldCheck } from "lucide-react";

export const ImpactStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [countDevices, setCountDevices] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const steps = 50;
    const stepTime = duration / steps;
    let current = 0;
    const target = 100;

    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        setCountDevices(target);
        clearInterval(timer);
      } else {
        setCountDevices(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xl shadow-blue-950/5">
        
        {/* Metric columns - perfectly aligned horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          {/* Stat 1: 100K+ Devices Serviced */}
          <div className="flex flex-col justify-start p-2 sm:px-6 lg:px-8 group space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-extrabold">
                Operational Scale
              </span>
            </div>

            <div className="space-y-1.5 min-h-[72px] flex flex-col justify-end">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#0A2540] tracking-tight flex items-baseline leading-none">
                <span>{countDevices}</span>
                <span className="text-blue-600 ml-1">K+</span>
              </div>
              <div className="text-base sm:text-lg font-display font-extrabold text-slate-800">
                Devices Serviced
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              Extending device lifespan with precision diagnostics and component-level rework.
            </p>
          </div>

          {/* Stat 2: Thousands of Tons CO2 Emissions Reduced */}
          <div className="flex flex-col justify-start p-2 sm:px-6 lg:px-8 pt-6 md:pt-2 group space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-orange-50 border border-orange-200 text-brand-orange group-hover:scale-105 transition-transform">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-extrabold">
                Environmental Offset
              </span>
            </div>

            <div className="space-y-1.5 min-h-[72px] flex flex-col justify-end">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A2540] tracking-tight leading-none">
                <span className="text-brand-orange">Thousands</span>{" "}
                <span className="text-slate-800">of Tons</span>
              </div>
              <div className="text-base sm:text-lg font-display font-extrabold text-slate-800">
                CO₂ Emissions Reduced
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              Measurable embodied carbon diversion through precision component harvesting and refurbishment.
            </p>
          </div>

          {/* Stat 3: Trusted by Leading OEMs & Enterprises */}
          <div className="flex flex-col justify-start p-2 sm:px-6 lg:px-8 pt-6 md:pt-2 group space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-extrabold">
                Enterprise Trust
              </span>
            </div>

            <div className="space-y-1.5 min-h-[72px] flex flex-col justify-end">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-[#0A2540] tracking-tight leading-tight">
                Trusted by{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-brand-orange">
                  Leading OEMs
                </span>
              </div>
              <div className="text-base sm:text-lg font-display font-extrabold text-slate-800">
                Strategic Alliance Partners
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              Standardized quality protocols aligned with global electronics manufacturers across South Asia.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
