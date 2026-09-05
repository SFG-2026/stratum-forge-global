import React from "react";
import { Badge } from "../ui/Badge";
import { Cpu, Users, ShieldCheck, Zap, Target, Sparkles, CheckCircle2 } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

export const DNASection: React.FC = () => {
  const icons = [Users, Target, ShieldCheck];

  return (
    <section className="relative py-24 sm:py-32 section-warm overflow-hidden border-t border-orange-100/60">
      
      {/* Decorative ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange" icon={<Zap className="w-3.5 h-3.5" />} className="mb-4">
            Core Philosophy
          </Badge>
          
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0A2540] tracking-tight">
            Our DNA: <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-blue-600 to-cyan-600">
              People × Purpose × Performance
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            "{BRAND_DATA.dna.body}"
          </p>
        </div>

        {/* 3 Pillars Grid with Warm Elevation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {BRAND_DATA.dna.pillars.map((pillar, index) => {
            const Icon = icons[index] || Cpu;
            const isOrangePillar = index === 1;

            return (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl border transition-all duration-300 group-hover:scale-110 ${
                      isOrangePillar
                        ? "bg-orange-50 border-orange-200 text-brand-orange"
                        : "bg-blue-50 border-blue-200 text-blue-600"
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      PILLAR 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-extrabold text-[#0A2540] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Standardized Engineering Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Photo Showcase: Macro Circuit Precision & Team Work */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
              Workplace Engineering Standard
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0A2540]">
              Empowered Technicians. High-Precision Systems.
            </h3>
            <p className="text-sm text-slate-600 font-sans leading-relaxed">
              Our workforce in Chennai combines multi-layer diagnostic mastery with certified soldering protocols (IPC standard) to revive components deemed unrecoverable.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                IPC J-STD-001 Certified
              </span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-brand-orange text-xs font-mono font-bold border border-orange-200">
                100% ESD Protected Cleanrooms
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 h-64 sm:h-80 relative overflow-hidden">
            <img
              src="/images/circuit_closeup.jpg"
              alt="High precision multilayer circuit board engineering"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                Micro-Soldering & Precision Trace Analysis
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
