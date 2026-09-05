import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import {
  Cpu,
  Activity,
  Wrench,
  Truck,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Sliders,
  Sparkles,
} from "lucide-react";
import { BRAND_DATA, type ServiceItem } from "../../data/content";

interface ServicesGridProps {
  onNavigateToServices?: (serviceId?: string) => void;
  onContact?: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onNavigateToServices,
  onContact,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const servicePhotos: Record<string, string> = {
    ems: "/images/ems_assembly_line.jpg",
    diagnostics: "/images/diagnostics_lab.jpg",
    "repair-refurbishment": "/images/component_rework.jpg",
    "field-services": "/images/engineering_team.jpg",
    "supply-chain": "/images/global_shipping.jpg",
  };

  const iconMap: Record<string, React.ReactNode> = {
    ems: <Cpu className="w-6 h-6 text-blue-600" />,
    diagnostics: <Activity className="w-6 h-6 text-cyan-600" />,
    "repair-refurbishment": <Wrench className="w-6 h-6 text-brand-orange" />,
    "field-services": <Truck className="w-6 h-6 text-blue-700" />,
    "supply-chain": <Layers className="w-6 h-6 text-cyan-700" />,
  };

  const handleCardClick = (service: ServiceItem) => {
    setSelectedService(service);
  };

  return (
    <section className="relative py-24 sm:py-32 section-cool overflow-hidden border-t border-slate-200">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="cyan" icon={<Sliders className="w-3.5 h-3.5" />} className="mb-4">
              Comprehensive Lifecycle Solutions
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0A2540] tracking-tight">
              One Partner. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-brand-electric">
                End-to-End Capabilities.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              We deliver integrated hardware services across the complete electronics lifecycle — from manufacturing to diagnosis, precision repair, and supply chain continuity.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button
              variant="outline"
              size="md"
              withArrow
              onClick={() => onNavigateToServices && onNavigateToServices()}
            >
              View Full Architecture
            </Button>
          </div>
        </div>

        {/* 5 Services Cards Grid (2-column on md, 3 on lg with 2 wide at bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_DATA.services.map((service, index) => {
            const isLastTwo = index >= 3;
            const photoUrl = servicePhotos[service.id];

            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service)}
                className={`group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-blue-400 transition-all duration-500 flex flex-col justify-between cursor-pointer ${
                  isLastTwo ? "lg:col-span-1 md:col-span-1" : ""
                }`}
              >
                {/* Photo Preview Container */}
                <div className="h-48 w-full overflow-hidden relative border-b border-slate-100">
                  <img
                    src={photoUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0A2540] border border-white/50 shadow-sm">
                      0{service.number} • {service.shortCode}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-white font-display font-extrabold text-lg leading-tight">
                      {service.title}
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <div className="text-xs font-mono font-bold text-brand-orange uppercase mb-1">
                      "{service.tagline}"
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Micro Capabilities Pills */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-blue-600 group-hover:text-blue-700">
                    <span>Explore Specifications</span>
                    <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Interactive 6th CTA Card */}
          <div className="bg-gradient-to-br from-[#0A2540] via-blue-900 to-blue-950 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between border border-blue-800 relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                Custom Requirements
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white leading-tight">
                Need a Custom SLA or Regional Rollout?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 font-sans leading-relaxed">
                Connect directly with our engineering team in Chennai to configure high-volume intake, ATE testing scripts, or reverse logistics.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <Button
                variant="orange"
                size="md"
                withArrow
                className="w-full"
                onClick={onContact}
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          subtitle={`Capability 0${selectedService.number} • ${selectedService.shortCode}`}
          maxWidth="2xl"
        >
          <div className="space-y-6">
            {/* Modal Image Banner */}
            <div className="h-52 w-full rounded-2xl overflow-hidden relative shadow-md border border-slate-200">
              <img
                src={servicePhotos[selectedService.id]}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                  Operational Standard
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-orange-50 text-brand-orange text-xs font-bold font-mono">
              "{selectedService.tagline}"
            </div>

            <p className="text-sm text-slate-700 font-sans leading-relaxed">
              {selectedService.description}
            </p>

            <div>
              <h4 className="text-xs font-mono font-bold text-[#0A2540] uppercase tracking-wider mb-3">
                Full Technical Scope:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-[#0A2540] uppercase tracking-wider mb-3">
                Key Enterprise Benefits:
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 font-sans">
                {selectedService.keyBenefits.map((ben, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-500">
                Operating standard: Chennai, India Hub
              </span>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  variant="orange"
                  size="sm"
                  withArrow
                  onClick={() => {
                    setSelectedService(null);
                    if (onContact) onContact();
                  }}
                >
                  Engage on this Service
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}

    </section>
  );
};
