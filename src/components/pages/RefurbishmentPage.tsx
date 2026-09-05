import React from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { CircuitBackground } from "../ui/CircuitBackground";
import {
  RotateCcw,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { BRAND_DATA } from "../../data/content";

interface RefurbishmentPageProps {
  onNavigate: (tabId: string) => void;
}

export const RefurbishmentPage: React.FC<RefurbishmentPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 bg-white text-slate-800">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50/80 to-white border-b border-slate-200 overflow-hidden">
        <CircuitBackground density="low" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="orange" icon={<RotateCcw className="w-3.5 h-3.5" />} className="mb-4">
            Specialized Hardware Recovery
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#0A2540] tracking-tight max-w-4xl mx-auto">
            Extend Life. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-blue-600 to-cyan-600">
              Enhance Reliability.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
            "{BRAND_DATA.refurbishment.subheading}"
          </p>
        </div>
      </section>

      {/* Featured Photo & Quote Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-[#0A2540] to-blue-950 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              Engineering Commitment
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              "{BRAND_DATA.refurbishment.quote}"
            </h2>
            <p className="text-sm text-blue-100 font-sans leading-relaxed">
              Refurbishment at StratumForge Global is not cosmetic touch-up. It is disciplined, root-cause failure analysis and multi-hour validation under high operational loads.
            </p>
          </div>
          <div className="lg:col-span-5 h-72 lg:h-full min-h-[300px] relative overflow-hidden">
            <img
              src="/images/component_rework.jpg"
              alt="Component Rework and Refurbishment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3 Core Capability Blocks */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRAND_DATA.refurbishment.capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-orange-50 text-brand-orange border border-orange-200">
                    STAGE 0{i + 1}
                  </span>
                  <span className="text-2xl font-display font-black text-slate-300">0{i + 1}</span>
                </div>

                <h3 className="text-xl font-display font-extrabold text-[#0A2540] mb-3">{cap.title}</h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">
                  {cap.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-200">
                  {cap.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] font-mono text-blue-600 font-bold">
                ✓ Full Parametric Verification
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hardware Domains Covered */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0A2540]">
              Target Hardware Categories & Sourcing Scope
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-sans">
              Precision component recovery and reconditioning across mission-critical devices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_DATA.refurbishment.devices.map((device, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-200">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-display font-extrabold text-[#0A2540]">{device.name}</h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">{device.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-3xl font-display font-extrabold text-[#0A2540]">
          Ready to Recover Capital from Decommissioned Hardware?
        </h3>
        <p className="text-sm text-slate-600 font-sans max-w-xl mx-auto">
          Contact our technical team to discuss volume intake, component harvesting, or custom refurbishment SLAs.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            variant="orange"
            size="lg"
            withArrow
            onClick={() => onNavigate("contact")}
          >
            Initiate Refurbishment Consultation
          </Button>
        </div>
      </section>

    </div>
  );
};
