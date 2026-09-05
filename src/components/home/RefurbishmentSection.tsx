import React from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  RotateCcw,
  Search,
  CheckCircle2,
  Server,
  Monitor,
  Laptop,
  HardDrive,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { BRAND_DATA } from "../../data/content";

interface RefurbishmentSectionProps {
  onNavigateToRefurbishment?: () => void;
  onContact?: () => void;
}

export const RefurbishmentSection: React.FC<RefurbishmentSectionProps> = ({
  onNavigateToRefurbishment,
  onContact,
}) => {
  const deviceIcons: Record<string, any> = {
    "Enterprise Servers": Server,
    "Commercial Desktops": HardDrive,
    "Workstation Notebooks": Laptop,
    "Monitors & Displays": Monitor,
  };

  return (
    <section className="relative py-24 sm:py-32 section-warm overflow-hidden border-t border-orange-100/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange" icon={<RotateCcw className="w-3.5 h-3.5" />} className="mb-4">
            Component-Level Engineering
          </Badge>
          
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0A2540] tracking-tight">
            Specialized Hardware Refurbishment
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            "{BRAND_DATA.refurbishment.subheading}"
          </p>
        </div>

        {/* Featured Hardware Refurbishment Banner: Server Recertification */}
        <div className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-[#0A2540] to-blue-900 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center border border-blue-800/60">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              Core Refurbishment Protocol
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              "{BRAND_DATA.refurbishment.quote}"
            </h3>
            <p className="text-sm text-blue-100/90 font-sans leading-relaxed">
              Every unit undergoes multi-hour automated burn-in stress tests, thermal profiling, micro-soldering remediation, and parametric recertification to match OEM performance tolerances.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-cyan-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Zero Latent Defect Tolerance
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-brand-orange" />
                Full Functional Warranty Backed
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 h-72 sm:h-80 lg:h-full min-h-[280px] relative overflow-hidden">
            <img
              src="/images/server_room.jpg"
              alt="Enterprise Server Recertification and Staging"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-mono text-white font-bold">
                Server Staging & Rack Recertification Hub
              </span>
            </div>
          </div>
        </div>

        {/* 3 Core Capability Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {BRAND_DATA.refurbishment.capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-orange-50 text-brand-orange border border-orange-200">
                    PHASE 0{i + 1}
                  </span>
                  <span className="text-2xl font-display font-black text-slate-300">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-extrabold text-[#0A2540] mb-3">
                  {cap.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-4">
                  {cap.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {cap.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-mono text-blue-600 font-bold">
                ✓ Full Parametric Validation
              </div>
            </div>
          ))}
        </div>

        {/* Hardware Domains Grid */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                Target Device Categories
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#0A2540] mt-1">
                Supported Enterprise Hardware Categories
              </h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              withArrow
              onClick={() => onNavigateToRefurbishment && onNavigateToRefurbishment()}
            >
              Hardware Matrix
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {BRAND_DATA.refurbishment.devices.map((device, idx) => {
              const Icon = deviceIcons[device.name] || Server;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-300 transition-all space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-display font-extrabold text-[#0A2540]">{device.name}</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">{device.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
