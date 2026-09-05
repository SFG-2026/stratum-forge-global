import React from "react";
import { Coins, Leaf, ShieldCheck, Layers, Users, Clock, CheckCircle2 } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

export const WhyChooseUs: React.FC = () => {
  const valuePillars = [
    {
      id: "cost",
      title: "Cost Advantage",
      desc: "Recovering functional components and restoring board-level hardware yields significant cost savings compared to newly fabricated units.",
      icon: Coins,
      accent: "orange",
    },
    {
      id: "sustainability",
      title: "Engineered Sustainability",
      desc: "Engineered circularity that diverts metric tons of complex electronics from landfills while lowering embodied carbon emissions.",
      icon: Leaf,
      accent: "orange",
    },
    {
      id: "reliability",
      title: "Assured Reliability",
      desc: "Zero tolerance for unverified hardware. Every component undergoes rigorous automated testing, burn-in validation, and QA certification.",
      icon: ShieldCheck,
      accent: "blue",
    },
    {
      id: "precision",
      title: "Precision Engineering",
      desc: "Standardized operating procedures, IPC-compliant micro-soldering, and continuous process monitoring across regional operations.",
      icon: Layers,
      accent: "blue",
    },
    {
      id: "team",
      title: "Certified Engineering Team",
      desc: "Dedicated diagnostics specialists, micro-rework technicians, and QA inspectors trained in root-cause failure analysis.",
      icon: Users,
      accent: "blue",
    },
    {
      id: "response",
      title: "Predictable Turnaround SLAs",
      desc: "Streamlined batch intake, automated triage pipelines, and door-to-hub reverse logistics ensuring rapid turnaround times.",
      icon: Clock,
      accent: "orange",
    },
  ];

  return (
    <section className="relative py-12 sm:py-24 bg-white overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header — spacious & bold */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
            Enterprise Value Proposition
          </span>
          
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A2540] tracking-tight">
            Why StratumForge Global
          </h2>

          <p className="mt-2.5 sm:mt-4 text-xs sm:text-lg text-slate-500 font-sans leading-relaxed">
            Delivering measurable commercial, operational, and environmental advantages through disciplined hardware lifecycle engineering.
          </p>
        </div>

        {/* 6-Pillar Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
          {valuePillars.map((item, index) => {
            const Icon = item.icon;
            const isOrange = item.accent === "orange";

            return (
              <div
                key={item.id}
                className="bg-slate-50/80 rounded-xl sm:rounded-2xl p-4 sm:p-8 flex flex-col justify-between border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-300 group-hover:scale-110 ${
                      isOrange
                        ? "bg-orange-50 border-orange-200 text-brand-orange"
                        : "bg-blue-50 border-blue-200 text-blue-600"
                    }`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-lg font-display font-extrabold text-[#0A2540] tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-slate-400 font-semibold group-hover:text-blue-600 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Enterprise Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom edge gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-50/40 to-transparent pointer-events-none" />
    </section>
  );
};
