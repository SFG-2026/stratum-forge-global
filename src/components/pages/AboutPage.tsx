import React from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  Cpu,
  Target,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { BRAND_DATA } from "../../data/content";

interface AboutPageProps {
  onNavigate: (tabId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const coreCompetencies = [
    { name: "People", desc: "Certified engineers, diagnostics specialists, and operations teams." },
    { name: "Processes", desc: "Disciplined, repeatable, and ESD-controlled operating protocols." },
    { name: "Intelligence", desc: "Root-cause telemetry and automated failure analysis feedback loops." },
    { name: "Engineering", desc: "Precision micro-soldering, BGA rework, and schematic tracing." },
    { name: "Diagnostics", desc: "ATE automated test benches and signal integrity verification." },
    { name: "Repair", desc: "High-yield board-level recovery extending mission-critical hardware." },
    { name: "Refurbishment", desc: "Multi-stage recertification, burn-in soak, and cosmetic remediation." },
    { name: "Manufacturing", desc: "Scalable EMS assembly and electro-mechanical system integration." },
    { name: "Field Services", desc: "SLA-backed regional deployment, commissioning, and reverse logistics." },
    { name: "Supply Chain & Sourcing", desc: "Authenticity-verified procurement and critical buffer stocks." },
  ];

  const facilityCards = [
    {
      title: "Cleanroom EMS Assembly Lines",
      desc: "Fully equipped with automated SMT pick-and-place lines, nitrogen reflow ovens, and 3D AOI inspection.",
      img: "/images/hero_banner.jpg",
      tag: "Manufacturing Center",
    },
    {
      title: "High-Precision QA & Failure Analysis",
      desc: "Stereo-microscopic inspection stations, high-bandwidth oscilloscopes, and automated test fixtures.",
      img: "/images/quality_inspection.jpg",
      tag: "Diagnostics & R&D",
    },
    {
      title: "Enterprise Server & IT Recertification",
      desc: "Thermal soak chambers, rack-level diagnostics, multi-hour burn-in stress testing, and staging.",
      img: "/images/server_room.jpg",
      tag: "Refurbishment Hub",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white text-slate-800">
      
      {/* Hero Header with Dynamic Aurora Mesh */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 hero-aurora-mesh opacity-75 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="cyan" icon={<Cpu className="w-3.5 h-3.5" />} className="mb-4">
            Corporate Profile & Philosophy
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#0A2540] tracking-tight max-w-4xl mx-auto">
            Engineering Precision. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-brand-orange">
              Sustainable Technology Lifecycle.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
            "{BRAND_DATA.missionStatement}"
          </p>
        </div>
      </section>

      {/* Facilities & Operations Unique Photo Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-widest">
            Operational Infrastructure
          </span>
          <h2 className="text-3xl font-display font-extrabold text-[#0A2540] mt-1">
            Certified Facilities & Diagnostic Laboratories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilityCards.map((facility, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden shadow-md border border-slate-200 group bg-slate-50 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={facility.img}
                    alt={facility.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                      {facility.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-display font-extrabold text-[#0A2540] mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-blue-600 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Chennai, India Facility</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10 Core Integrated Disciplines */}
      <section className="py-20 section-cool border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="orange" icon={<Target className="w-3.5 h-3.5" />} className="mb-4">
              Integrated Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0A2540]">
              The 10 Integrated Disciplines of StratumForge Global
            </h2>
            <p className="mt-4 text-sm text-slate-600 font-sans">
              From microscopic precision soldering to macro-scale reverse logistics and fleet management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 mb-2">
                    DISCIPLINE 0{idx + 1}
                  </div>
                  <h3 className="text-base font-display font-extrabold text-[#0A2540] mb-2">{comp.name}</h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">{comp.desc}</p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center gap-1 text-[10px] font-mono text-blue-600 font-bold">
                  ✓ Active Core
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chennai Operational Footprint */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span className="font-bold uppercase tracking-wider">{BRAND_DATA.contact.location}</span>
              </div>
              <h2 className="text-3xl font-display font-extrabold text-white">
                Strategic Operations Center for India & South Asia
              </h2>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Operating out of Chennai, Tamil Nadu — India's premier hardware and electronics corridor — StratumForge Global connects Tier-1 OEMs, enterprise fleets, and hyperscalers with world-class lifecycle support.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button
                variant="orange"
                size="md"
                withArrow
                onClick={() => onNavigate("contact")}
                className="w-full"
              >
                Schedule Technical Visit
              </Button>
              <button
                type="button"
                onClick={() => onNavigate("services")}
                className="w-full py-2.5 px-6 rounded-xl font-display font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-slate-500/80 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
