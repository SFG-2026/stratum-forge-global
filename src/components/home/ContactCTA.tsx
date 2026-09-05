import React from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Send, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
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
    <section className="relative py-24 sm:py-32 section-warm overflow-hidden border-t border-orange-100/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 bg-white border border-slate-200/90 shadow-2xl shadow-blue-950/5 relative overflow-hidden">
          
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="orange" icon={<Send className="w-3.5 h-3.5" />}>
                Ready to Collaborate?
              </Badge>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0A2540] tracking-tight">
                Let's Talk About Your Technology Lifecycle Challenges
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
                Whether you need scalable EMS assembly, component-level board rework, automated diagnostics, or full-scale refurbishment across South Asia.
              </p>

              {/* Direct Info Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{BRAND_DATA.contact.location}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>{BRAND_DATA.contact.email}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button
                variant="orange"
                size="lg"
                withArrow
                onClick={handleContact}
                className="w-full"
              >
                Initiate Technical Consultation
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={handleServices}
                className="w-full"
              >
                Explore All Services
              </Button>
              <p className="text-center text-xs font-mono text-slate-400">
                Dedicated Enterprise Response Desk
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
