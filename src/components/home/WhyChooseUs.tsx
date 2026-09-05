import React from "react";
import { Badge } from "../ui/Badge";
import { Coins, Leaf, ShieldCheck, Layers, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, any> = {
    cost: Coins,
    sustainability: Leaf,
    reliability: ShieldCheck,
    precision: Layers,
  };

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" icon={<Shield className="w-3.5 h-3.5" />} className="mb-4">
            Enterprise Value Proposition
          </Badge>
          
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0A2540] tracking-tight">
            Why StratumForge Global
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Delivering measurable commercial, operational, and environmental advantages through engineering discipline.
          </p>
        </div>

        {/* 2-Column Enhanced Layout: High-Precision Quality Photo + 4 Value Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Quality Inspection Photo Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl border border-slate-800 relative group">
            <div className="h-64 sm:h-80 lg:h-72 w-full overflow-hidden relative">
              <img
                src="/images/quality_inspection.jpg"
                alt="High-Precision Quality Inspection and Diagnostics"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white border border-blue-400/40">
                  IPC Certified QA Protocol
                </span>
              </div>
            </div>

            <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-display font-extrabold text-white">
                  Zero Compromise on Quality Standards
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  Every circuit board, surface-mount IC, and blade chassis undergoes automated optical and digital microscope inspection before leaving our Chennai facility.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs text-cyan-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>100% ESD Safe Cleanrooms</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-orange font-mono">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>Sub-millimeter Micro-Rework Precision</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: 4 Benefit Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BRAND_DATA.whyChooseUs.map((benefit, index) => {
              const Icon = iconMap[benefit.id] || ShieldCheck;
              const isOrangeAccent = benefit.id === "cost" || benefit.id === "sustainability";

              return (
                <div
                  key={benefit.id}
                  className="bg-slate-50 rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl border transition-all duration-300 group-hover:scale-110 ${
                        isOrangeAccent
                          ? "bg-orange-50 border-orange-200 text-brand-orange"
                          : "bg-blue-50 border-blue-200 text-blue-600"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-display font-extrabold text-[#0A2540] tracking-wide mb-1.5">
                      {benefit.title}
                    </h3>

                    <p className="text-xs font-bold text-slate-800 leading-snug font-sans mb-2">
                      "{benefit.description}"
                    </p>

                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {benefit.detail}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 font-semibold group-hover:text-blue-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Enterprise Guaranteed</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
