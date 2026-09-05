import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { CircuitBackground } from "../ui/CircuitBackground";
import {
  Cpu,
  Activity,
  Wrench,
  Truck,
  Layers,
  CheckCircle2,
  Sliders,
  ShieldCheck,
} from "lucide-react";
import { BRAND_DATA, type ServiceItem } from "../../data/content";

interface ServicesPageProps {
  onNavigate: (tabId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>("ems");

  const servicePhotos: Record<string, string> = {
    ems: "/images/ems_assembly_line.jpg",
    diagnostics: "/images/diagnostics_lab.jpg",
    "repair-refurbishment": "/images/component_rework.jpg",
    "field-services": "/images/engineering_team.jpg",
    "supply-chain": "/images/logistics_hub.jpg",
  };

  const icons: Record<string, any> = {
    ems: Cpu,
    diagnostics: Activity,
    "repair-refurbishment": Wrench,
    "field-services": Truck,
    "supply-chain": Layers,
  };

  const currentService =
    BRAND_DATA.services.find((s) => s.id === activeServiceId) || BRAND_DATA.services[0];

  const CurrentIcon = icons[currentService.id] || Cpu;

  return (
    <div className="pt-24 pb-20 bg-white text-slate-800">
      
      {/* Header */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-blue-50/80 to-white border-b border-slate-200 overflow-hidden">
        <CircuitBackground density="low" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="cyan" icon={<Sliders className="w-3.5 h-3.5" />} className="mb-3 sm:mb-4">
            Capabilities & Service Architecture
          </Badge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0A2540] tracking-tight max-w-4xl mx-auto break-words">
            One Ecosystem. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Five Critical Capabilities.
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
            From manufacturing and automated diagnostics to component-level repair, refurbishment, field services, and supply chain assurance.
          </p>
        </div>
      </section>

      {/* Main Interactive Services Explorer */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Capability Selectors Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {BRAND_DATA.services.map((service) => {
            const Icon = icons[service.id];
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`flex items-center gap-2 sm:gap-2.5 px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl font-display font-bold text-xs sm:text-sm active:scale-95 transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 border border-blue-700"
                    : "bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-current" />
                <span>{service.title}</span>
                <span className="text-[9px] sm:text-[10px] font-mono opacity-70">[{service.shortCode}]</span>
              </button>
            );
          })}
        </div>

        {/* Active Capability Deep Dive Box */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          
          {/* Real Photo Banner for Active Capability */}
          <div className="mb-10 h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 relative">
            <img
              src={servicePhotos[currentService.id] || "/images/ems_assembly_line.jpg"}
              alt={currentService.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                  Operational Standard
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                  {currentService.title} Cleanroom Environment
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Detail */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-blue-600 shadow-sm">
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-brand-orange uppercase">
                    Service Capability 0{currentService.number}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0A2540]">
                    {currentService.title}
                  </h2>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-sm font-bold text-brand-orange font-sans">
                "{currentService.tagline}"
              </div>

              <p className="text-base text-slate-700 font-sans leading-relaxed">
                {currentService.description}
              </p>

              {/* Capabilities List */}
              <div className="pt-2">
                <h3 className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-4">
                  Key Technical Scope & Workflows
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="pt-2">
                <h3 className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase mb-3">
                  Enterprise Value & Yield Impact
                </h3>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  {currentService.keyBenefits.map((ben, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Specifications & SLA Box */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
                <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase pb-2 border-b border-slate-100">
                  Technical Specifications
                </h3>

                <div className="space-y-3">
                  {currentService.specs.map((spec, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">{spec.label}</span>
                      <div className="text-xs font-display font-bold text-[#0A2540] mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-700 flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>Aligned with ISO & ESD-Safe Benchmarks</span>
                </div>
              </div>

              {/* Action Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white space-y-4 shadow-lg">
                <h4 className="text-base font-display font-extrabold text-white">
                  Require {currentService.title}?
                </h4>
                <p className="text-xs text-blue-100 font-sans">
                  Connect with our Chennai operations desk to schedule a technical evaluation or SLA proposal.
                </p>
                <Button
                  variant="orange"
                  size="md"
                  withArrow
                  className="w-full"
                  onClick={() => onNavigate("contact")}
                >
                  Request Technical Quotation
                </Button>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};
