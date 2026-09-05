import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { Leaf, Cpu, RefreshCw, Layers, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

export const SustainabilitySection: React.FC = () => {
  const [deviceCount, setDeviceCount] = useState<number>(2500);

  const estimatedCO2Tons = Math.round((deviceCount * 0.18 * 0.75));
  const estimatedRecoveryUSD = Math.round(deviceCount * 140);

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange" icon={<Leaf className="w-3.5 h-3.5" />} className="mb-4">
            Engineered Circularity
          </Badge>
          
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0A2540] tracking-tight">
            Repair. Recover. Reuse. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-blue-600 to-cyan-600">
              Reduce Waste.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            {BRAND_DATA.sustainability.body}
          </p>
        </div>

        {/* Featured Circular Economy & Recovery Facility Photo Banner */}
        <div className="mb-16 rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center border border-slate-800">
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              Responsible Asset Management & ESG
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Circular Economy in Action: High-Yield Material Reclamation
            </h3>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              Every unit routed through our Chennai lifecycle hub is triaged for maximum component reusability. Unrepairable modules are segregated for zero-landfill, certified e-waste refining.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Audit Trail & Environmental Compliance Certificates Provided</span>
            </div>
          </div>
          <div className="lg:col-span-6 h-64 sm:h-80 relative overflow-hidden">
            <img
              src="/images/sustainability_ewaste.jpg"
              alt="Circular Economy Electronics Recovery Facility"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                Certified E-Waste Sorting & Recovery
              </span>
            </div>
          </div>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {BRAND_DATA.sustainability.pillars.map((pillar, i) => {
            const icons = [Cpu, RefreshCw, Layers, TrendingUp, Leaf];
            const Icon = icons[i];
            const isCarbon = pillar.label === "CO₂ Reduction";

            return (
              <div
                key={i}
                className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                  isCarbon
                    ? "bg-orange-50/90 border-orange-200 shadow-md sm:col-span-2 lg:col-span-1"
                    : "bg-slate-50 border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${
                      isCarbon ? "bg-brand-orange text-white" : "bg-blue-100 text-blue-700"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-extrabold text-[#0A2540] mb-1">
                    {pillar.label}
                  </h3>
                  
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {pillar.value}
                  </p>
                </div>

                <div className={`mt-6 pt-3 border-t text-[11px] font-mono font-bold ${
                  isCarbon ? "border-orange-200 text-brand-orange" : "border-slate-200 text-blue-600"
                }`}>
                  Circularity Standard
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Impact Calculator Card */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest">
                Enterprise ESG Estimator
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Calculate Avoided Carbon & Restored Capital
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Adjust your estimated batch size of enterprise hardware devices (servers, workstations, or laptops) to simulate environmental offset and recovered value through StratumForge Global.
              </p>

              {/* Slider Control */}
              <div className="pt-4 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Batch Volume:</span>
                  <span className="text-lg font-bold text-cyan-300 font-display">
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
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>200 Units</span>
                  <span>5,000 Units</span>
                  <span>10,000+ Units</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-slate-700/80 space-y-2">
                <span className="text-xs font-mono text-slate-400">Avoided Embodied Carbon</span>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-orange">
                  ~{estimatedCO2Tons} <span className="text-sm font-normal text-slate-300">Tons</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Direct CO₂ equivalent reduction from deferred new manufacturing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-slate-700/80 space-y-2">
                <span className="text-xs font-mono text-slate-400">Estimated Capital Restored</span>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-cyan-300">
                  ${(estimatedRecoveryUSD / 1000).toFixed(0)}k+ <span className="text-sm font-normal text-slate-300">USD</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Recovered asset value retained on enterprise balance sheet.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
