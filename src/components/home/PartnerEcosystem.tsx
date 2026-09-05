import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { Network, Building2, Truck, Cpu, Globe2, ArrowRightLeft, ShieldCheck } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

export const PartnerEcosystem: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("stratumforge");

  const nodes = [
    {
      id: "oems",
      title: "Original Equipment Manufacturers (OEMs)",
      subtitle: "Global Hardware Makers",
      role: "Direct technical alignment, warranty fulfillment, engineering schematics, and component specifications.",
      icon: Cpu,
      position: "top",
    },
    {
      id: "logistics",
      title: "Specialized Logistics Providers",
      subtitle: "Secure Transit & Forward/Reverse Logistics",
      role: "End-to-end chain-of-custody, rapid regional pickup, ESD-safe transit, and reverse supply chain orchestration.",
      icon: Truck,
      position: "left",
    },
    {
      id: "stratumforge",
      title: "STRATUMFORGE GLOBAL HUB",
      subtitle: "Central Engineering & Lifecycle Intelligence",
      role: "Automated diagnostics, precision micro-rework, component harvesting, burn-in validation, and quality governance.",
      icon: Network,
      position: "center",
      isHub: true,
    },
    {
      id: "technology",
      title: "Technology Partners",
      subtitle: "ATE & Diagnostics Tooling",
      role: "Next-generation automated test equipment, diagnostic telemetry, and firmware validation platforms.",
      icon: Globe2,
      position: "right",
    },
    {
      id: "enterprises",
      title: "Enterprise Fleet Operators",
      subtitle: "Data Centers, BFSI & IT Infrastructure",
      role: "Hardware decommissioning, lifecycle extension, onsite field services, and maximized asset value recovery.",
      icon: Building2,
      position: "bottom",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 section-cool overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" icon={<Network className="w-3.5 h-3.5" />} className="mb-4">
            Collaborative Infrastructure
          </Badge>
          
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0A2540] tracking-tight">
            Built on Strong Partnerships.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            {BRAND_DATA.partnerEcosystem.body}
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-sans">
            {BRAND_DATA.partnerEcosystem.supportingText}
          </p>
        </div>

        {/* Connected Ecosystem Node Graph */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 relative shadow-xl">
          
          {/* Animated Connecting Pathways (Desktop) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 450" fill="none">
              <line x1="400" y1="225" x2="400" y2="70" stroke="#0066FF" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <line x1="400" y1="225" x2="400" y2="380" stroke="#FF5A1F" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <line x1="400" y1="225" x2="160" y2="225" stroke="#0099CC" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <line x1="400" y1="225" x2="640" y2="225" stroke="#0066FF" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              
              <circle cx="400" cy="225" r="95" stroke="#0066FF" strokeWidth="1" strokeOpacity="0.2" fill="none" />
              <circle cx="400" cy="225" r="140" stroke="#FF5A1F" strokeWidth="1" strokeOpacity="0.2" fill="none" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 items-center">
            
            {/* Left Nodes: Logistics & OEMs */}
            <div className="space-y-6">
              <div
                onClick={() => setActiveNode("logistics")}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeNode === "logistics"
                    ? "bg-blue-50 border-blue-400 shadow-md shadow-blue-500/10"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-extrabold text-[#0A2540]">Logistics Providers</h4>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">Reverse & Forward Transit</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-sans">
                  SLA-backed regional pickup and ESD-safe transit orchestration across India and South Asia.
                </p>
              </div>

              <div
                onClick={() => setActiveNode("oems")}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeNode === "oems"
                    ? "bg-blue-50 border-blue-400 shadow-md shadow-blue-500/10"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-extrabold text-[#0A2540]">OEMs & Brands</h4>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">Global Manufacturers</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-sans">
                  Direct technical alignment, warranty fulfillment, and authorized repair protocols.
                </p>
              </div>
            </div>

            {/* Center Node: STRATUMFORGE GLOBAL (Central Hub) */}
            <div
              onClick={() => setActiveNode("stratumforge")}
              className="p-8 rounded-3xl bg-gradient-to-b from-blue-900 to-[#0A2540] text-white border-2 border-brand-orange shadow-2xl text-center cursor-pointer relative group my-4 md:my-0"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange mb-4 shadow-lg">
                <Network className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-xs font-mono font-bold text-brand-orange uppercase tracking-widest mb-1">
                Connected Core
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                STRATUMFORGE GLOBAL
              </h3>
              <p className="text-xs text-blue-100 mt-2 font-sans leading-relaxed">
                Centralized engineering intelligence, standardized diagnostics, micro-rework, and secondary lifecycle coordination.
              </p>
              <div className="mt-4 pt-3 border-t border-blue-800 inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 font-bold">
                <ArrowRightLeft className="w-3.5 h-3.5 text-brand-orange" />
                <span>Multi-Point Bidirectional Flow</span>
              </div>
            </div>

            {/* Right Node: Technology Partners & Enterprises */}
            <div className="space-y-6">
              <div
                onClick={() => setActiveNode("technology")}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeNode === "technology"
                    ? "bg-blue-50 border-blue-400 shadow-md shadow-blue-500/10"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-cyan-100 text-cyan-700">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-extrabold text-[#0A2540]">Technology Partners</h4>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">ATE & Diagnostic Tooling</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-sans">
                  Automated test systems and diagnostic telemetry to enforce zero defect escape.
                </p>
              </div>

              <div
                onClick={() => setActiveNode("enterprises")}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeNode === "enterprises"
                    ? "bg-orange-50 border-brand-orange shadow-md shadow-orange-500/10"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-orange-100 text-brand-orange">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-extrabold text-[#0A2540]">Enterprises & Data Centers</h4>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">Fleet Operations</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-sans">
                  Fleet maintenance, onsite field support, and systematic value restoration for decommissioned assets.
                </p>
              </div>
            </div>

          </div>

          {/* Active Node Detail Context Bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>
                Selected Node:{" "}
                <strong className="text-[#0A2540] font-mono uppercase">
                  {nodes.find((n) => n.id === activeNode)?.title}
                </strong>
              </span>
            </div>
            <span className="text-slate-600 font-sans text-right max-w-lg">
              {nodes.find((n) => n.id === activeNode)?.role}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
