import React from "react";
import { Hero } from "../home/Hero";
import { HomeAboutSection } from "../home/HomeAboutSection";
import { ServicePreview } from "../home/ServicePreview";
import { HardwareCategories } from "../home/HardwareCategories";
import { LifecycleSection } from "../home/LifecycleSection";
import { WhyChooseUs } from "../home/WhyChooseUs";
import { SustainabilitySection } from "../home/SustainabilitySection";
import { ContactCTA } from "../home/ContactCTA";
import { AnimatedHeroCanvas } from "../ui/AnimatedHeroCanvas";

interface HomePageProps {
  onNavigate: (tabId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Extended Interactive Tech Canvas: Seamlessly encompasses both Hero & Connected Hardware Sections */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-blue-50/20">
        {/* Continuous Interactive Animated Circuit Network Canvas */}
        <AnimatedHeroCanvas />

        {/* Ambient Aurora Gradient Auras spanning top and bottom */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[750px] md:w-[950px] h-[320px] sm:h-[480px] bg-gradient-to-tr from-blue-500/15 via-cyan-400/15 to-orange-400/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none z-0 animate-pulse-subtle" />
        <div className="absolute top-[65%] right-[8%] w-[280px] sm:w-[500px] h-[280px] sm:h-[480px] bg-gradient-to-br from-brand-orange/10 via-blue-500/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute top-[80%] left-[5%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none z-0" />

        {/* Floating Geometric Circuit Accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 sm:top-24 left-[3%] sm:left-[5%] animate-float-slow opacity-[0.08]">
            <svg width="70" height="70" viewBox="0 0 100 100" fill="none" className="text-blue-600 sm:w-[100px] sm:h-[100px]">
              <path d="M10 75 L45 30 L80 75 L65 75 L45 48 L25 75 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute top-24 sm:top-28 right-[3%] sm:right-[6%] animate-float-slower opacity-[0.08]">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="text-cyan-500 sm:w-[120px] sm:h-[120px]">
              <path d="M15 85 L50 35 L85 85 L70 85 L50 52 L30 85 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute top-[48%] left-[2%] sm:left-[3%] animate-float-reverse opacity-[0.06]">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-brand-orange sm:w-[80px] sm:h-[80px]">
              <path d="M20 80 L50 35 L80 80 L65 80 L50 55 L35 80 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute top-[75%] right-[4%] animate-float-slow opacity-[0.07]">
            <svg width="65" height="65" viewBox="0 0 100 100" fill="none" className="text-blue-600 sm:w-[90px] sm:h-[90px]">
              <path d="M10 75 L45 30 L80 75 L65 75 L45 48 L25 75 Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Hero Section */}
        <Hero
          onExplore={() => onNavigate("services")}
          onContact={() => onNavigate("contact")}
        />

        {/* Subtle Tech Flow Divider */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-1">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
        </div>

        {/* Connected Hardware Lifecycle Partner Section */}
        <HomeAboutSection onNavigate={onNavigate} />

        {/* Bottom edge gradient glow — smooth transition into ServicePreview */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-0" />
      </div>

      <ServicePreview
        onNavigateToServices={() => onNavigate("services")}
        onContact={() => onNavigate("contact")}
      />
      <HardwareCategories
        onNavigateToServices={() => onNavigate("services")}
      />
      <LifecycleSection />
      <WhyChooseUs />
      <SustainabilitySection onNavigate={onNavigate} />
      <ContactCTA
        onContact={() => onNavigate("contact")}
        onExploreServices={() => onNavigate("services")}
      />
    </div>
  );
};
