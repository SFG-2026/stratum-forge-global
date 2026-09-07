import React from "react";
import { TrendingUp, ShieldCheck, Leaf, Eye } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const trustPillars = [
    {
      id: "value",
      title: "Maximize Value",
      desc: "Get more value from technology assets. Our expert processes recover, restore, and redistribute hardware — turning dormant inventory into measurable returns.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-amber-400",
      bgGlow: "bg-orange-500/10",
      borderColor: "border-orange-200",
      iconBg: "bg-gradient-to-br from-orange-50 to-amber-50",
      iconColor: "text-orange-600",
      hoverBorder: "hover:border-orange-300",
      stat: "40%+",
      statLabel: "Cost Savings",
    },
    {
      id: "secure",
      title: "Secure",
      desc: "Protect data and handle assets responsibly. From certified data sanitization to chain-of-custody tracking, your assets and information are safeguarded at every step.",
      icon: ShieldCheck,
      gradient: "from-blue-600 to-cyan-500",
      bgGlow: "bg-blue-500/10",
      borderColor: "border-blue-200",
      iconBg: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      hoverBorder: "hover:border-blue-300",
      stat: "100%",
      statLabel: "Data Compliance",
    },
    {
      id: "sustainable",
      title: "Sustainable",
      desc: "Extend product life and reduce waste. Every asset we process is diverted from landfill, contributing to a circular economy and measurably lowering your carbon footprint.",
      icon: Leaf,
      gradient: "from-emerald-500 to-teal-400",
      bgGlow: "bg-emerald-500/10",
      borderColor: "border-emerald-200",
      iconBg: "bg-gradient-to-br from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600",
      hoverBorder: "hover:border-emerald-300",
      stat: "Zero",
      statLabel: "Landfill Waste",
    },
    {
      id: "transparent",
      title: "Transparent",
      desc: "Clear processes and reporting. Real-time dashboards, detailed audit trails, and open communication — you always know exactly where your assets are and what's happening.",
      icon: Eye,
      gradient: "from-violet-500 to-purple-400",
      bgGlow: "bg-violet-500/10",
      borderColor: "border-violet-200",
      iconBg: "bg-gradient-to-br from-violet-50 to-purple-50",
      iconColor: "text-violet-600",
      hoverBorder: "hover:border-violet-300",
      stat: "Full",
      statLabel: "Audit Trail",
    },
  ];

  return (
    <section className="relative py-16 sm:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-br from-blue-100/30 via-orange-50/20 to-violet-100/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-emerald-100/30 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            The StratumForge Global Promise
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-display font-black text-[#0A2540] tracking-tight leading-normal sm:leading-[1.35] lg:leading-[1.3]">
            Why should I give my assets to{" "}
            <span className="relative inline-block my-1 sm:my-0 pb-1">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-brand-orange bg-clip-text text-transparent">
                StratumForge Global
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-500 to-brand-orange rounded-full opacity-40" />
            </span>{" "}
            instead of somebody else?
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-500 font-sans leading-relaxed max-w-2xl mx-auto">
            Four pillars that set us apart — built on trust, driven by results, and backed by complete accountability.
          </p>
        </div>

        {/* Trust Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {trustPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.id}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border ${pillar.borderColor} ${pillar.hoverBorder} hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Corner glow on hover */}
                <div className={`absolute -top-px -right-px w-24 h-24 ${pillar.bgGlow} rounded-tr-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Top row: Icon + Stat */}
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${pillar.iconBg} border ${pillar.borderColor} ${pillar.iconColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>

                  {/* Stat badge */}
                  <div className="text-right">
                    <div className={`text-xl sm:text-2xl font-display font-black bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                      {pillar.stat}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      {pillar.statLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-extrabold text-[#0A2540] tracking-tight mb-2 sm:mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-sans leading-relaxed">
                  {pillar.desc}
                </p>

                {/* Bottom gradient accent */}
                <div className={`absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r ${pillar.gradient} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Trust statement */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-slate-200">
            <div className="flex -space-x-1">
              <div className="w-2 h-2 rounded-full bg-orange-400" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <div className="w-2 h-2 rounded-full bg-violet-400" />
            </div>
            <span className="text-xs sm:text-sm font-sans text-slate-500">
              Trusted by enterprises to handle their most valuable technology assets
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
