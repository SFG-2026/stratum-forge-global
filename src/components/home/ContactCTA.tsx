import React from "react";
import { Button } from "../ui/Button";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

interface ContactCTAProps {
  onNavigateToContact?: () => void;
  onContact?: () => void;
  onExploreServices?: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  onNavigateToContact,
  onContact,
  onExploreServices,
}) => {
  const handleContact = onContact || onNavigateToContact || (() => {});
  const handleServices = onExploreServices || (() => {});

  return (
    <section className="relative py-12 sm:py-24 bg-white overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-xl relative overflow-hidden">
          
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-brand-orange">
                Ready to Collaborate?
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A2540] tracking-tight leading-tight">
                Let's Talk About Your Technology Lifecycle Challenges
              </h2>

              <p className="text-sm sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
                Whether you require scalable EMS assembly, component-level board rework, automated diagnostics, or full-scale refurbishment across South Asia.
              </p>

              {/* Direct Info Badges */}
              <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-600">
                <a
                  href={`tel:${BRAND_DATA.contact.phonePrimary}`}
                  className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-200 hover:border-orange-300 hover:text-brand-orange active:scale-95 transition-all shadow-sm text-[11px] sm:text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                  <span>{BRAND_DATA.contact.phonePrimary}</span>
                </a>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-200 shadow-sm text-[11px] sm:text-xs">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>{BRAND_DATA.contact.location}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button
                variant="orange"
                size="lg"
                withArrow
                onClick={handleContact}
                className="w-full text-sm sm:text-base font-extrabold shadow-lg shadow-orange-500/25 active:scale-95 py-3 sm:py-4"
              >
                Request a Consultation
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={handleServices}
                className="w-full text-xs sm:text-sm font-bold bg-white active:scale-95 py-2.5 sm:py-3"
              >
                Explore All Services
              </Button>
              <p className="text-center text-[10px] sm:text-xs font-mono text-slate-400">
                Dedicated Enterprise Response Desk
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
