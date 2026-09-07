import React, { useState, useEffect } from "react";
import { BrandLogo } from "../../assets/BrandLogo";
import { Button } from "../ui/Button";
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

interface NavbarProps {
  currentTab: string;
  onNavigate: (tabId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "how-it-works", label: "How It Works" },
    { id: "sustainability", label: "Sustainability" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-2xl border-b border-slate-200/90 shadow-md shadow-blue-950/5 py-2 sm:py-2.5"
            : "bg-white/90 backdrop-blur-xl py-2.5 sm:py-3.5 border-b border-slate-200/70 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Prominent Logo Anchor — clicking returns to Home */}
          <div onClick={() => handleNavClick("home")} className="cursor-pointer">
            <BrandLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-inner">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 sm:px-5 py-2 text-sm font-display font-bold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 bg-white shadow-sm font-extrabold"
                      : "text-slate-700 hover:text-blue-600 hover:bg-white/60"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-brand-orange rounded-full shadow-glow-orange" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Contact (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="orange"
              size="md"
              withArrow
              onClick={() => handleNavClick("contact")}
              className="shadow-lg shadow-orange-500/25 text-sm font-display font-extrabold px-6 py-2.5"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-blue-600 active:scale-95 shadow-sm focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Slide-out Menu Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[88%] sm:w-[85%] max-w-sm bg-white border-l border-slate-200 p-5 sm:p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out z-10 overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top Decorative Brand Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-brand-orange" />

          <div>
            {/* Dedicated Mobile Drawer Header with Logo & Close Button */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mt-2">
              <div onClick={() => handleNavClick("home")} className="cursor-pointer">
                <BrandLogo size="sm" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-brand-orange hover:bg-orange-50 active:scale-95 transition-all"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Menu List */}
            <div className="mt-4 space-y-1">
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-400 pb-1.5 font-extrabold">
                Navigation Menu
              </div>
              <div className="flex flex-col gap-1 sm:gap-1.5">
                {navItems.map((item) => {
                  const isActive = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl text-left font-display font-bold text-sm transition-all ${
                        isActive
                          ? "bg-blue-50 text-blue-600 border border-blue-200 shadow-sm"
                          : "text-slate-800 hover:bg-slate-50 hover:text-blue-600 active:bg-slate-100"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-orange shadow-glow-orange" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Contact & Action */}
          <div className="space-y-3.5 pt-4 border-t border-slate-100 mt-4">
            <Button
              variant="orange"
              size="md"
              withArrow
              className="w-full shadow-lg shadow-orange-500/20 py-2.5 sm:py-3 text-sm font-display font-extrabold"
              onClick={() => handleNavClick("contact")}
            >
              Let's Talk
            </Button>

            <div className="space-y-2 text-xs text-slate-600 font-mono bg-slate-50 p-3 sm:p-3.5 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span className="truncate text-[11px] sm:text-xs">{BRAND_DATA.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                <span className="text-[11px] sm:text-xs">{BRAND_DATA.contact.location}</span>
              </div>
              <div className="pt-1.5 border-t border-slate-200/60 flex flex-col gap-1 text-[11px]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-blue-600 flex-shrink-0" />
                  <a href="tel:+917483545473" className="hover:text-blue-600">+91 7483545473</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
