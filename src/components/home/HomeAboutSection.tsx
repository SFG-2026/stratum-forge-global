import React from "react";
import { Cpu, ShieldCheck, Activity, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

interface HomeAboutSectionProps {
  onNavigate?: (tabId: string) => void;
}

export const HomeAboutSection: React.FC<HomeAboutSectionProps> = ({ onNavigate }) => {
  const highlights = [
    {
      icon: Activity,
      title: "Automated Diagnostics & Testing",
      desc: "ATE automated test fixtures, voltage tolerance mapping, and component-level fault tracing.",
      accent: "cyan",
      badge: "Diagnostics",
    },
    {
      icon: Cpu,
      title: "Precision BGA & Micro-Rework",
      desc: "ESD-controlled cleanroom stations, nitrogen reflow, and microscopic circuit restoration.",
      accent: "orange",
      badge: "Rework Hub",
    },
    {
      icon: ShieldCheck,
      title: "100K+ Enterprise Assets Serviced",
      desc: "Proven track record supporting major telecom infrastructure, data centers, and IT fleets.",
      accent: "blue",
      badge: "Enterprise Scale",
    },
    {
      icon: Truck,
      title: "Reverse Logistics & Regional Hubs",
      desc: "Centralized Chennai lifecycle facility with door-to-hub reverse logistics across South Asia.",
      accent: "emerald",
      badge: "Supply Chain",
    },
  ];

  const accentStyles: Record<string, { iconBg: string; text: string; borderHover: string; badgeBg: string }> = {
    cyan: {
      iconBg: "bg-cyan-50 border-cyan-200 text-cyan-600",
      text: "text-cyan-600",
      borderHover: "hover:border-cyan-400",
      badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    },
    orange: {
      iconBg: "bg-orange-50 border-orange-200 text-brand-orange",
      text: "text-brand-orange",
      borderHover: "hover:border-orange-400",
      badgeBg: "bg-orange-50 text-orange-700 border-orange-200",
    },
    blue: {
      iconBg: "bg-blue-50 border-blue-200 text-blue-600",
      text: "text-blue-600",
      borderHover: "hover:border-blue-400",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    },
    emerald: {
      iconBg: "bg-emerald-50 border-emerald-200 text-emerald-600",
      text: "text-emerald-600",
      borderHover: "hover:border-emerald-400",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  };

  return (
    <section className="relative pt-6 sm:pt-8 pb-12 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Overview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: Narrative Overview */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-orange-50/90 border border-orange-200/80 text-brand-orange text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              Engineering Excellence
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A2540] tracking-tight leading-tight">
              A Connected Hardware Lifecycle Partner
            </h2>

            <p className="text-sm sm:text-lg text-slate-700 font-sans font-medium leading-relaxed">
              {BRAND_DATA.missionStatement}
            </p>

            <p className="text-xs sm:text-base text-slate-600 font-sans leading-relaxed">
              StratumForge Global is not merely a repair vendor. Based in Chennai, India, we operate a centralized hardware lifecycle hub providing end-to-end electronics manufacturing, automated failure diagnostics, component-level rework, and certified asset refurbishment under strict ESD controls.
            </p>

            {/* Credibility Micro-badges */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                100% ESD Class 10K
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                Sub-mm BGA Rework
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                Chain-of-Custody
              </span>
            </div>

            <div className="pt-2">
              {onNavigate && (
                <button
                  onClick={() => onNavigate("about")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0A2540] hover:bg-blue-950 active:scale-95 text-white font-display font-bold text-sm shadow-xl shadow-blue-950/20 hover:scale-105 transition-all group"
                >
                  <span>Discover Our Story & Facilities</span>
                  <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>

          {/* Right: 4 Themed Glassmorphic Capability Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              const style = accentStyles[item.accent];

              return (
                <div
                  key={idx}
                  className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-lg shadow-blue-950/5 ${style.borderHover} hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 space-y-2.5 sm:space-y-3 group`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${style.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${style.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-display font-bold text-[#0A2540] group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
