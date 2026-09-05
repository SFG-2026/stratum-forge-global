import React from "react";
import { Users, Target, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

export const DNASection: React.FC = () => {
  const icons = [Users, Target, ShieldCheck];

  return (
    <section className="relative py-10 sm:py-16 section-warm overflow-hidden border-t border-orange-100/40">
      
      {/* Subtle ambient glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header — proper visual hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
            Core Philosophy
          </span>
          
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-black text-[#0A2540] tracking-tight">
            Our DNA: <br className="sm:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-blue-600 to-cyan-600">
              People × Purpose × Performance
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
            {BRAND_DATA.dna.body}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {BRAND_DATA.dna.pillars.map((pillar, index) => {
            const Icon = icons[index] || ShieldCheck;
            const isCenter = index === 1;

            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl border transition-all duration-300 group-hover:scale-110 ${
                      isCenter
                        ? "bg-orange-50 border-orange-200 text-brand-orange"
                        : "bg-blue-50 border-blue-200 text-blue-600"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-300">
                      PILLAR 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-display font-extrabold text-[#0A2540] tracking-wide uppercase">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span>{pillar.detail}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom edge gradient — transitions into dark Lifecycle section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A2540]/10 to-transparent pointer-events-none" />
    </section>
  );
};
