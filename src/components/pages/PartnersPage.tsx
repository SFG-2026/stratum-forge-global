import React from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { PartnerEcosystem } from "../home/PartnerEcosystem";
import { Handshake, ShieldCheck, Truck, Layers, CheckCircle2 } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

interface PartnersPageProps {
  onNavigate: (tabId: string) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate }) => {
  const alliancePrinciples = [
    {
      title: "Quality Standard Alignment",
      desc: "Synchronizing diagnostic parameters, ATE scripts, and component tolerance thresholds directly with OEM engineering teams.",
    },
    {
      title: "Chain of Custody & Traceability",
      desc: "Serialized tracking for every module from regional intake and repair benches to final deployment or recycling.",
    },
    {
      title: "Predictable Turnaround SLAs",
      desc: "Guaranteed turnaround windows across India & South Asia supported by proactive buffer inventory and reverse transit.",
    },
    {
      title: "Shared Environmental Governance",
      desc: "Transparent reporting on diverted e-waste, carbon offsets, and material reclamation metrics for corporate ESG goals.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white text-slate-800">
      
      {/* Header with Dynamic Aurora Mesh */}
      <section className="relative py-12 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 hero-aurora-mesh opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="cyan" icon={<Handshake className="w-3.5 h-3.5" />} className="mb-3 sm:mb-4">
            Ecosystem Collaboration
          </Badge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0A2540] tracking-tight max-w-4xl mx-auto break-words">
            Built on Strong Partnerships.
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
            "{BRAND_DATA.partnerEcosystem.body}"
          </p>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-500 font-sans max-w-2xl mx-auto">
            {BRAND_DATA.partnerEcosystem.supportingText}
          </p>
        </div>
      </section>

      {/* Featured Global Logistics & Partner Hub Photo Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center border border-slate-800">
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
              Supply Chain & Alliance Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Seamless Reverse Logistics & Regional Staging
            </h2>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              We coordinate with leading global logistics carriers and enterprise supply chains across India and South Asia, providing secure bonded transit and automated buffer inventory.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Multi-tier OEM SLA Integration</span>
            </div>
          </div>
          <div className="lg:col-span-6 h-64 sm:h-80 relative overflow-hidden">
            <img
              src="/images/global_shipping.jpg"
              alt="Global Supply Chain Logistics and Shipping Hub"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                Automated High-Bay Logistics & Staging
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Ecosystem Graph */}
      <PartnerEcosystem />

      {/* Collaboration Framework */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-extrabold text-[#0A2540]">
            Ecosystem Integration Framework
          </h2>
          <p className="mt-3 text-sm text-slate-600 font-sans">
            How we ensure operational excellence and zero quality drift across all alliance nodes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alliancePrinciples.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-extrabold text-[#0A2540]">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            variant="orange"
            size="lg"
            withArrow
            onClick={() => onNavigate("contact")}
          >
            Become an Ecosystem Partner
          </Button>
        </div>
      </section>

    </div>
  );
};
