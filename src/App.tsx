import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { RefurbishmentPage } from "./components/pages/RefurbishmentPage";
import { PartnersPage } from "./components/pages/PartnersPage";
import { CareersPage } from "./components/pages/CareersPage";
import { ContactPage } from "./components/pages/ContactPage";
import { MessageSquare, ArrowUp, Phone, Mail } from "lucide-react";
import { BRAND_DATA } from "./data/content";

export function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        ["home", "about", "services", "refurbishment", "partners", "careers", "contact"].includes(
          hash
        )
      ) {
        setCurrentTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Back to top listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (tabId: string) => {
    setCurrentTab(tabId);
    window.location.hash = tabId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col relative selection:bg-brand-orange selection:text-white">
      {/* Top Navbar */}
      <Navbar currentTab={currentTab} onNavigate={navigateTo} />

      {/* Main Content View Switcher */}
      <main className="flex-grow">
        {currentTab === "home" && <HomePage onNavigate={navigateTo} />}
        {currentTab === "about" && <AboutPage onNavigate={navigateTo} />}
        {currentTab === "services" && <ServicesPage onNavigate={navigateTo} />}
        {currentTab === "refurbishment" && <RefurbishmentPage onNavigate={navigateTo} />}
        {currentTab === "partners" && <PartnersPage onNavigate={navigateTo} />}
        {currentTab === "careers" && <CareersPage onNavigate={navigateTo} />}
        {currentTab === "contact" && <ContactPage />}
      </main>

      {/* Global Enterprise Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
        {/* Quick Contact Floating Button - High Contrast & 100% Visible */}
        {currentTab !== "contact" && (
          <button
            onClick={() => navigateTo("contact")}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0A2540] text-white font-display font-bold text-xs sm:text-sm border-2 border-brand-orange shadow-2xl shadow-orange-500/25 hover:bg-[#07172C] hover:border-orange-400 hover:scale-105 transition-all"
            aria-label="Direct inquiry desk"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
            <MessageSquare className="w-4 h-4 text-brand-orange" />
            <span className="text-white font-extrabold">Direct Inquiry</span>
          </button>
        )}

        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-surface-elevated/90 border border-slate-700 text-slate-300 hover:text-white hover:border-brand-cyan shadow-lg transition-all focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
