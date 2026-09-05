import React from "react";
import { BrandLogo } from "../../assets/BrandLogo";
import { BRAND_DATA } from "../../data/content";
import { Mail, MapPin, Phone, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";

interface FooterProps {
  onNavigate: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const primaryLinks = [
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "how-it-works", label: "How It Works" },
    { id: "sustainability", label: "Sustainability" },
    { id: "contact", label: "Contact & Inquiries" },
  ];

  const companyLinks = [
    { id: "partners", label: "Partner Ecosystem" },
    { id: "careers", label: "Careers & Culture" },
    { id: "about", label: "Our Story" },
  ];

  const serviceLinks = [
    { id: "services", label: "Electronics Manufacturing (EMS)" },
    { id: "services", label: "Diagnostics & Testing" },
    { id: "services", label: "Repair & Refurbishment" },
    { id: "services", label: "Field Services & RMA" },
    { id: "services", label: "Supply Chain & Sourcing" },
  ];

  const scrollToTop = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A1A2F] border-t border-slate-800 pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden text-slate-300">
      {/* Circuit Trace Ambient Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-brand-orange" />
      
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-slate-700/60">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-3.5 sm:space-y-4">
            <div onClick={() => scrollToTop("home")} className="cursor-pointer bg-white p-2.5 sm:p-3 rounded-2xl w-fit shadow-md">
              <BrandLogo size="md" />
            </div>
            <p className="text-xs sm:text-sm text-white font-display font-semibold max-w-sm pt-1">
              "{BRAND_DATA.tagline}"
            </p>
            <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-sm">
              {BRAND_DATA.missionStatement}
            </p>
            
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-cyan-300">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-cyan-500/30">
                <Cpu className="w-3.5 h-3.5" />
                <span>Enterprise Technology Lifecycle</span>
              </div>
            </div>
          </div>

          {/* Primary Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {primaryLinks.map((link) => (
                <li key={link.id + link.label}>
                  <button
                    onClick={() => scrollToTop(link.id)}
                    className="hover:text-cyan-300 transition-colors text-left flex items-center gap-1 group text-slate-300"
                  >
                    <span className="text-slate-500 group-hover:text-brand-orange transition-colors">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links (Partners, Careers here) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToTop(link.id)}
                    className="hover:text-cyan-300 transition-colors text-left flex items-center gap-1 group text-slate-300"
                  >
                    <span className="text-slate-500 group-hover:text-brand-orange transition-colors">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase pt-4">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.slice(0, 3).map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToTop(service.id)}
                    className="hover:text-cyan-300 transition-colors text-left flex items-center gap-1 group text-slate-300"
                  >
                    <span className="text-slate-500 group-hover:text-cyan-300 transition-colors">›</span>
                    <span className="line-clamp-1">{service.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Regional Hub */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              Operational Hub
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">{BRAND_DATA.contact.location}</div>
                  <div className="text-xs text-slate-400">{BRAND_DATA.contact.region}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                <a
                  href={`mailto:${BRAND_DATA.contact.email}`}
                  className="hover:text-cyan-300 transition-colors font-mono text-xs text-slate-200 whitespace-nowrap truncate"
                >
                  {BRAND_DATA.contact.email}
                </a>
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+917483545473" className="hover:text-cyan-300 font-mono text-xs text-slate-200">
                    +91 7483545473
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                  <a href="tel:+919566065552" className="hover:text-cyan-300 font-mono text-xs text-slate-200">
                    +91 9566065552
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => scrollToTop("contact")}
                className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-brand-orange hover:text-brand-orange-light transition-colors"
              >
                <span>Submit Technical Requirement</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>© 2026 StratumForge Global. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Standardized Engineering & Quality Execution</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
