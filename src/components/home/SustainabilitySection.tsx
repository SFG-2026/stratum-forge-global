import React, { useState } from "react";
import { Leaf, Cpu, RefreshCw, Layers, TrendingUp, CheckCircle2, TreePine, Droplets, ArrowRight } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

interface SustainabilitySectionProps {
  onNavigate?: (tabId: string) => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ onNavigate }) => {
  const [deviceCount, setDeviceCount] = useState<number>(2500);

  const estimatedCO2Tons = Math.round((deviceCount * 0.18 * 0.75));
  const estimatedRecoveryUSD = Math.round(deviceCount * 140);
  const estimatedTreesEquivalent = Math.round(estimatedCO2Tons * 17);

  return (
    <section className="relative py-12 sm:py-24 section-warm overflow-hidden border-t border-orange-100/40">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header — proper visual hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
            Engineered Circularity
          </span>
          
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A2540] tracking-tight">
            Repair. Recover. Reuse. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-blue-600 to-cyan-600">
              Reduce Waste.
            </span>
          </h2>

          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-500 font-sans leading-relaxed">
            {BRAND_DATA.sustainability.body}
          </p>
        </div>

        {/* Impact Infographic Strip */}
        <div className="mb-8 sm:mb-10 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 text-center">
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div className="p-2 sm:p-3 rounded-xl bg-blue-50 border border-blue-200">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="text-xl sm:text-3xl font-display font-black text-[#0A2540]">
                100K+
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-sans">Devices Serviced & Extended</div>
            </div>
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div className="p-2 sm:p-3 rounded-xl bg-orange-50 border border-orange-200">
                <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />
              </div>
              <div className="text-xl sm:text-3xl font-display font-black text-[#0A2540]">
                4,200+ <span className="text-sm sm:text-base font-bold text-slate-400">Tons</span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-sans">CO₂ Emissions Prevented</div>
            </div>
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div className="p-2 sm:p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                <TreePine className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>
              <div className="text-xl sm:text-3xl font-display font-black text-[#0A2540]">
                71K+
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-sans">Trees Equivalent Saved</div>
            </div>
          </div>
        </div>

        {/* Interactive Impact Calculator — promoted above pillars */}
        <div className="mb-8 sm:mb-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-10 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
            
            <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest">
                Enterprise ESG Estimator
              </span>
              <h3 className="text-lg sm:text-2xl font-display font-extrabold text-white">
                Calculate Your Avoided Carbon & Restored Capital
              </h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Adjust your estimated batch size to simulate environmental offset and recovered value through StratumForge Global.
              </p>

              {/* Slider */}
              <div className="pt-2 sm:pt-3 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Batch Volume:</span>
                  <span className="text-base sm:text-lg font-bold text-cyan-300 font-display">
                    {deviceCount.toLocaleString()} Units
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={deviceCount}
                  onChange={(e) => setDeviceCount(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>200 Units</span>
                  <span>5,000 Units</span>
                  <span>10,000+ Units</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="p-2.5 sm:p-4 rounded-xl bg-white/5 border border-slate-700/80 space-y-1 text-center">
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400">Avoided CO₂</span>
                <div className="text-lg sm:text-3xl font-display font-extrabold text-brand-orange">
                  ~{estimatedCO2Tons}
                </div>
                <span className="text-[9px] sm:text-[10px] text-slate-400">Tons</span>
              </div>

              <div className="p-2.5 sm:p-4 rounded-xl bg-white/5 border border-slate-700/80 space-y-1 text-center">
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400">Capital</span>
                <div className="text-lg sm:text-3xl font-display font-extrabold text-cyan-300">
                  ${(estimatedRecoveryUSD / 1000).toFixed(0)}k+
                </div>
                <span className="text-[9px] sm:text-[10px] text-slate-400">USD</span>
              </div>

              <div className="p-2.5 sm:p-4 rounded-xl bg-white/5 border border-slate-700/80 space-y-1 text-center">
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400">Trees Saved</span>
                <div className="text-lg sm:text-3xl font-display font-extrabold text-emerald-400">
                  ~{estimatedTreesEquivalent.toLocaleString()}
                </div>
                <span className="text-[9px] sm:text-[10px] text-slate-400">Equivalent</span>
              </div>
            </div>
          </div>
        </div>

        {/* ESG Commitment Statement */}
        <div className="mb-6 sm:mb-8 text-center px-1">
          <p className="text-xs sm:text-sm text-slate-500 font-sans italic max-w-2xl mx-auto leading-relaxed">
            "Our commitment to sustainability is certified and auditable. Every unit processed through our Chennai lifecycle hub receives full chain-of-custody documentation and environmental compliance certification."
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] font-mono font-bold text-slate-400">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> ISO 14001</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-500" /> R2 Certified</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-brand-orange" /> Zero Landfill</span>
          </div>
        </div>

        {/* Photo Banner */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 text-white shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center border border-slate-800">
          <div className="lg:col-span-6 p-4 sm:p-8 space-y-2.5 sm:space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
              Responsible Asset Management
            </span>
            <h3 className="text-lg sm:text-2xl font-display font-extrabold text-white">
              Circular Economy in Action
            </h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Every unit routed through our Chennai lifecycle hub is triaged for maximum component reusability. Unrepairable modules are segregated for zero-landfill, certified e-waste refining.
            </p>
            <div className="pt-1 sm:pt-2 flex items-center gap-2 text-[10px] font-mono text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Full Audit Trail & Environmental Compliance Certificates</span>
            </div>
          </div>
          <div className="lg:col-span-6 h-44 sm:h-64 relative overflow-hidden">
            <img
              src="/images/sustainability_ewaste.jpg"
              alt="Circular Economy Electronics Recovery Facility"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3 sm:p-4">
              <span className="text-[9px] sm:text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                Certified E-Waste Recovery
              </span>
            </div>
          </div>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {BRAND_DATA.sustainability.pillars.map((pillar, i) => {
            const icons = [Cpu, RefreshCw, Layers, TrendingUp, Leaf];
            const Icon = icons[i];
            const isHighlight = i === 4;

            return (
              <div
                key={i}
                className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl border transition-all flex flex-col justify-between ${
                  isHighlight
                    ? "bg-orange-50/90 border-orange-200 shadow-sm"
                    : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl ${
                      isHighlight ? "bg-brand-orange text-white" : "bg-blue-50 text-blue-600"
                    }`}>
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-300">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-display font-extrabold text-[#0A2540]">
                    {pillar.label}
                  </h3>
                  <p className="mt-1 text-[10px] sm:text-[11px] text-slate-500 font-sans leading-relaxed">
                    {pillar.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Full Sustainability Framework Link */}
        {onNavigate && (
          <div className="mt-6 sm:mt-8 text-center">
            <button
              onClick={() => onNavigate("sustainability")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-[#0A2540] hover:text-brand-orange border border-slate-200 hover:border-orange-300 font-display font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all group"
            >
              <span>Explore Complete ESG Framework & Auditable Standards</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-brand-orange" />
            </button>
          </div>
        )}
      </div>

      {/* Bottom edge gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-100/40 to-transparent pointer-events-none" />
    </section>
  );
};
