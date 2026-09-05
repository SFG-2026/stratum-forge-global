import React from "react";
import { Hero } from "../home/Hero";
import { ImpactStats } from "../home/ImpactStats";
import { DNASection } from "../home/DNASection";
import { ServicesGrid } from "../home/ServicesGrid";
import { LifecycleSection } from "../home/LifecycleSection";
import { RefurbishmentSection } from "../home/RefurbishmentSection";
import { WhyChooseUs } from "../home/WhyChooseUs";
import { PartnerEcosystem } from "../home/PartnerEcosystem";
import { SustainabilitySection } from "../home/SustainabilitySection";
import { CareersCTA } from "../home/CareersCTA";
import { ContactCTA } from "../home/ContactCTA";

interface HomePageProps {
  onNavigate: (tabId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      <Hero
        onExplore={() => onNavigate("services")}
        onContact={() => onNavigate("contact")}
      />
      <ImpactStats />
      <DNASection />
      <ServicesGrid
        onNavigateToServices={() => onNavigate("services")}
        onContact={() => onNavigate("contact")}
      />
      <LifecycleSection />
      <RefurbishmentSection
        onNavigateToRefurbishment={() => onNavigate("refurbishment")}
        onContact={() => onNavigate("contact")}
      />
      <WhyChooseUs />
      <PartnerEcosystem />
      <SustainabilitySection />
      <CareersCTA onNavigateToCareers={() => onNavigate("careers")} />
      <ContactCTA
        onContact={() => onNavigate("contact")}
        onExploreServices={() => onNavigate("services")}
      />
    </div>
  );
};
