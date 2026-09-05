import React, { useState } from "react";
import {
  Truck,
  Cpu,
  Activity,
  Wrench,
  RotateCcw,
  Send,
  TrendingUp,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { BRAND_DATA } from "../../data/content";

export const LifecycleSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>("repair");

  const icons: Record<string, any> = {
    source: Truck,
    manufacture: Cpu,
    diagnose: Activity,
    repair: Wrench,
    refurbish: RotateCcw,
    deploy: Send,
    "recover-value": TrendingUp,
  };

  const stagePhotos: Record<string, string> = {
    source: "/images/global_shipping.jpg",
    manufacture: "/images/hero_banner.jpg",
    diagnose: "/images/diagnostics_lab.jpg",
    repair: "/images/component_rework.jpg",
    refurbish: "/images/server_room.jpg",
    deploy: "/images/logistics_hub.jpg",
    "recover-value": "/images/sustainability_ewaste.jpg",
  };

  const selectedStage =
    BRAND_DATA.lifecycle.find((s) => s.id === activeStageId) || BRAND_DATA.lifecycle[3];

  return (
    <section className="relative py-12 sm:py-20 md:py-32 section-dark overflow-hidden border-t border-slate-800">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[280px] sm:w-[800px] h-[250px] sm:h-[400px] bg-blue-600/15 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      {/* Subtle Tech Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none tech-grid-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header — proper visual hierarchy for dark section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400/80">
            How It Works
          </span>
          
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Extending the Life of Technology
          </h2>

          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-400 font-sans leading-relaxed">
            StratumForge Global is not just a repair vendor. We are a connected technology lifecycle partner, linking procurement, manufacturing, testing, and value restoration.
          </p>
        </div>

        {/* Mobile Horizontal Scrolling Stage Selector (<lg) */}
        <div className="lg:hidden mb-5 overflow-x-auto pb-2 -mx-4 px-4 flex gap-1.5 sm:gap-2 no-scrollbar">
          {BRAND_DATA.lifecycle.map((stage, idx) => {
            const Icon = icons[stage.id] || Cpu;
            const isActive = stage.id === activeStageId;
            const isLast = idx === BRAND_DATA.lifecycle.length - 1;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border text-[11px] sm:text-xs font-display font-bold transition-all active:scale-95 ${
                  isActive
                    ? isLast
                      ? "bg-brand-orange text-white border-brand-orange shadow-md shadow-orange-500/20"
                      : "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20"
                    : "bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>0{stage.step} {stage.name}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Horizontal Connected Architecture Flow (lg+) */}
        <div className="hidden lg:block relative my-12">
          
          {/* Glowing Connecting Line */}
          <div className="absolute top-[42px] left-[6%] right-[6%] h-[3px] bg-slate-800 z-0">
            <div className="h-full w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-brand-orange animate-pulse" />
          </div>

          <div className="grid grid-cols-7 gap-3 relative z-10">
            {BRAND_DATA.lifecycle.map((stage, idx) => {
              const Icon = icons[stage.id] || Cpu;
              const isActive = stage.id === activeStageId;
              const isLast = idx === BRAND_DATA.lifecycle.length - 1;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 group focus:outline-none ${
                    isActive
                      ? "bg-white/10 backdrop-blur-md border border-cyan-400/50 shadow-lg shadow-cyan-500/20 scale-105"
                      : "hover:bg-white/5 border border-transparent hover:border-slate-700"
                  }`}
                >
                  {/* Step Node Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 shadow-md ${
                      isActive
                        ? isLast
                          ? "bg-brand-orange text-white shadow-glow-orange ring-4 ring-orange-500/20"
                          : "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-glow-cyan ring-4 ring-cyan-500/20"
                        : "bg-slate-800/90 text-slate-400 border border-slate-700 group-hover:text-white group-hover:border-slate-500"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider mb-1 ${
                      isActive ? (isLast ? "text-brand-orange" : "text-cyan-300") : "text-slate-500"
                    }`}
                  >
                    STAGE 0{stage.step}
                  </span>

                  <span
                    className={`text-xs font-display font-bold leading-tight ${
                      isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Card (Responsive on Mobile) */}
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
            
            {/* Left: Detail Info */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-[9px] sm:text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider bg-cyan-950/60 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-cyan-800">
                  Phase 0{selectedStage.step} of 07
                </span>
                <span className="text-[9px] sm:text-xs font-mono text-slate-400 font-medium">
                  {selectedStage.id.toUpperCase()} PROTOCOL
                </span>
              </div>

              <h3 className="text-lg sm:text-3xl lg:text-4xl font-display font-extrabold text-white">
                {selectedStage.name}: {selectedStage.summary}
              </h3>

              <div className="p-2.5 sm:p-3.5 rounded-xl bg-white/5 border border-slate-700/80 text-xs sm:text-sm font-mono text-brand-orange font-semibold">
                "{selectedStage.summary}"
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans leading-relaxed">
                {selectedStage.detail}
              </p>

              {/* Quality Highlights */}
              <div className="pt-1 sm:pt-2">
                <h4 className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Operational Benchmarks:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  <div className="p-2 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-2 text-[11px] sm:text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Serialized Asset Intake & Tracking</span>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-2 text-[11px] sm:text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Cleanroom Protocol Compliance</span>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-2 text-[11px] sm:text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Parametric Signal & Functional Tests</span>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-2 text-[11px] sm:text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Full Sustainability Telemetry</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Unique Image Container */}
            <div className="lg:col-span-5 flex flex-col space-y-2.5 sm:space-y-4">
              <div className="h-44 sm:h-64 lg:h-72 rounded-xl sm:rounded-2xl overflow-hidden relative shadow-lg border border-slate-700 group">
                <img
                  src={stagePhotos[selectedStage.id]}
                  alt={selectedStage.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-3 sm:p-4">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-brand-orange font-bold uppercase tracking-wider">
                      Process Standard
                    </span>
                    <div className="text-xs sm:text-sm font-display font-bold text-white">
                      Stage 0{selectedStage.step}: {selectedStage.name} Operations
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-slate-700/80 flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-brand-orange" />
                  <span className="text-[10px] sm:text-xs">Automated Quality Handshake</span>
                </div>
                <span className="text-cyan-300 font-bold text-[10px] sm:text-xs">100% Traceability</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
