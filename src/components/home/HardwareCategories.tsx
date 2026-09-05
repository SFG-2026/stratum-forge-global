import React from "react";
import { Server, Monitor, Cpu, Layout, ArrowUpRight } from "lucide-react";

interface HardwareCategoriesProps {
  onNavigateToServices?: () => void;
}

export const HardwareCategories: React.FC<HardwareCategoriesProps> = ({
  onNavigateToServices,
}) => {
  const categories = [
    {
      icon: Server,
      title: "Enterprise Servers",
      description: "Rackmount, tower servers, blade chassis. HPE, Dell, Lenovo, Supermicro.",
      accent: "blue",
    },
    {
      icon: Monitor,
      title: "Commercial Desktops",
      description: "Laptops, desktops, power supplies, thermal solutions, peripherals.",
      accent: "cyan",
    },
    {
      icon: Cpu,
      title: "Workstation Hardware",
      description: "Displays, high-density CPUs, rackmount servers, GPU/HPC workstations.",
      accent: "blue",
    },
    {
      icon: Layout,
      title: "Monitors & Displays",
      description: "T Connectors, IPS panels, power boards, control boards, LED backlights.",
      accent: "orange",
    },
  ];

  const accentMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200" },
    orange: { bg: "bg-orange-50", text: "text-brand-orange", border: "border-orange-200" },
  };

  return (
    <section className="relative py-12 sm:py-20 section-cool overflow-hidden border-t border-blue-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
              Trust Across Categories
            </span>
            <h2 className="mt-1 sm:mt-1.5 text-xl sm:text-3xl font-display font-extrabold text-[#0A2540] tracking-tight">
              Supported Enterprise Hardware
            </h2>
          </div>
          {onNavigateToServices && (
            <button
              onClick={onNavigateToServices}
              className="flex items-center gap-1 text-xs font-display font-bold text-blue-600 hover:text-blue-700 transition-colors group flex-shrink-0 w-fit"
            >
              <span>Hardware Matrix</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>

        {/* 4 Category Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {categories.map((cat) => {
            const colors = accentMap[cat.accent];
            const Icon = cat.icon;

            return (
              <div
                key={cat.title}
                className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-slate-200 hover:${colors.border} hover:shadow-md transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  <div className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl ${colors.bg} w-fit mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-xs sm:text-base font-display font-extrabold text-[#0A2540]">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-[10px] sm:text-xs text-slate-500 font-sans leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom edge gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-50/30 to-transparent pointer-events-none" />
    </section>
  );
};
