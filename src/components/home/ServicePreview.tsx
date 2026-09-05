import React from "react";
import { Cpu, Activity, RefreshCw, CheckCircle2, ArrowUpRight } from "lucide-react";

interface ServicePreviewProps {
  onNavigateToServices?: () => void;
  onContact?: () => void;
}

export const ServicePreview: React.FC<ServicePreviewProps> = ({
  onNavigateToServices,
  onContact,
}) => {
  const services = [
    {
      number: "01",
      title: "COMPONENT RECOVERY",
      tagline:
        "Precision harvesting of high-value parts for reuse — extending hardware lifecycles and reducing procurement costs.",
      capabilities: [
        "Non-destructive desoldering and extraction",
        "Pre-assembly component validation",
        "Inventory cataloguing and classification",
      ],
      icon: Cpu,
      image: "/images/component_rework.jpg",
      accent: "blue",
    },
    {
      number: "02",
      title: "FAILURE ANALYSIS",
      tagline:
        "Pinpointing root causes to strengthen system reliability through data-driven diagnostics and test protocols.",
      capabilities: [
        "Microscope-aided visual inspection",
        "Thermal mapping and power profiling",
        "Parametric benchmarking across OEM baselines",
      ],
      icon: Activity,
      image: "/images/diagnostics_lab.jpg",
      accent: "cyan",
    },
    {
      number: "03",
      title: "REFURBISHMENT EXCELLENCE",
      tagline:
        "Restoring components to peak performance with certified processes, burn-in validation, and quality assurance.",
      capabilities: [
        "Component-level board repair and rework",
        "Full system re-assembly and firmware restoration",
        "Customer cosmetic and functional verification",
      ],
      icon: RefreshCw,
      image: "/images/server_room.jpg",
      accent: "orange",
    },
  ];

  const accentColors: Record<string, { border: string; bg: string; text: string; iconBg: string; badge: string }> = {
    blue: {
      border: "border-blue-200 hover:border-blue-400",
      bg: "bg-blue-50",
      text: "text-blue-600",
      iconBg: "bg-blue-100",
      badge: "bg-blue-600",
    },
    cyan: {
      border: "border-cyan-200 hover:border-cyan-400",
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      iconBg: "bg-cyan-100",
      badge: "bg-cyan-600",
    },
    orange: {
      border: "border-orange-200 hover:border-orange-400",
      bg: "bg-orange-50",
      text: "text-brand-orange",
      iconBg: "bg-orange-100",
      badge: "bg-brand-orange",
    },
  };

  return (
    <section className="relative py-12 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section intro — SMALL badge + link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 gap-3 sm:gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
              What We Do
            </span>
            <h2 className="mt-1.5 sm:mt-2 text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A2540] tracking-tight">
              Core Capabilities
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-500 font-sans max-w-xl leading-relaxed">
              Integrated hardware services across the complete electronics lifecycle — from recovery to refurbishment.
            </p>
          </div>
          {onNavigateToServices && (
            <button
              onClick={onNavigateToServices}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-display font-bold text-blue-600 hover:text-blue-700 transition-colors group flex-shrink-0 w-fit"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service) => {
            const colors = accentColors[service.accent];
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className={`group bg-white rounded-2xl sm:rounded-3xl border ${colors.border} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col`}
              >
                {/* Card Image with number badge */}
                <div className="relative h-36 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3">
                    <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full ${colors.badge} text-white backdrop-blur-md`}>
                      {service.number}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3">
                    <div className={`p-1.5 sm:p-2 rounded-xl ${colors.iconBg} backdrop-blur-md border border-white/20`}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.text}`} />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-sm sm:text-lg font-display font-extrabold text-[#0A2540] tracking-wide">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Capability Bullets */}
                  <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 flex-1">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-600 font-sans">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${colors.text} flex-shrink-0 mt-0.5`} />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom link */}
                  <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100">
                    <button
                      onClick={onNavigateToServices}
                      className={`flex items-center gap-1 text-xs font-display font-bold ${colors.text} hover:opacity-80 transition-opacity`}
                    >
                      <span>Full Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom edge gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyan-50/40 to-transparent pointer-events-none" />
    </section>
  );
};
