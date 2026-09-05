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
import { SustainabilityPage } from "./components/pages/SustainabilityPage";
import { MessageSquare, ArrowUp } from "lucide-react";

export function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Valid routes
  const validRoutes = [
    "home", "about", "services", "how-it-works", "refurbishment",
    "partners", "careers", "contact", "sustainability"
  ];

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (validRoutes.includes(hash)) {
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
        {/* "how-it-works" maps to the refurbishment page (renamed) */}
        {currentTab === "how-it-works" && <RefurbishmentPage onNavigate={navigateTo} />}
        {currentTab === "refurbishment" && <RefurbishmentPage onNavigate={navigateTo} />}
        {currentTab === "partners" && <PartnersPage onNavigate={navigateTo} />}
        {currentTab === "careers" && <CareersPage onNavigate={navigateTo} />}
        {currentTab === "contact" && <ContactPage />}
        {/* Dedicated Sustainability & ESG Page */}
        {currentTab === "sustainability" && <SustainabilityPage onNavigate={navigateTo} />}
      </main>

      {/* Global Enterprise Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating Action Controls */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end gap-2.5 sm:gap-3">
        {/* Quick Contact Floating Button - High Contrast & 100% Visible */}
        {currentTab !== "contact" && (
          <button
            onClick={() => navigateTo("contact")}
            className="flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-3 rounded-full bg-[#0A2540] text-white font-display font-bold text-xs sm:text-sm border-2 border-brand-orange shadow-2xl shadow-orange-500/25 hover:bg-[#07172C] hover:border-orange-400 active:scale-95 transition-all"
            aria-label="Direct inquiry desk"
          >
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-orange animate-ping" />
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange" />
            <span className="text-white font-extrabold text-[11px] sm:text-sm">Direct Inquiry</span>
          </button>
        )}

        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-2.5 sm:p-3 rounded-full bg-[#0A2540]/90 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white hover:border-brand-cyan shadow-lg active:scale-95 transition-all focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
