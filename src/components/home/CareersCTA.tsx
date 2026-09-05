import React from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Users, GraduationCap, Target, ArrowUpRight } from "lucide-react";
import { BRAND_DATA } from "../../data/content";

interface CareersCTAProps {
  onNavigateToCareers: () => void;
}

export const CareersCTA: React.FC<CareersCTAProps> = ({ onNavigateToCareers }) => {
  const icons = [Users, GraduationCap, Target];

  return (
    <section className="relative py-24 sm:py-32 section-dark overflow-hidden border-t border-slate-800">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content & Heading */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="cyan" icon={<Users className="w-3.5 h-3.5" />} className="bg-cyan-950/60 border-cyan-500/30 text-cyan-300">
              Culture & Engineering Careers
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Bring Your Best. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-brand-orange">
                Build What Matters.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              {BRAND_DATA.careers.copy}
            </p>

            <div className="pt-2">
              <Button
                variant="orange"
                size="lg"
                withArrow
                onClick={onNavigateToCareers}
              >
                Explore Careers in Chennai
              </Button>
            </div>
          </div>

          {/* Right: 3 Culture Highlights with Dark Glass Cards */}
          <div className="lg:col-span-6 space-y-4">
            {BRAND_DATA.careers.highlights.map((item, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={item.title}
                  className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 border border-slate-700 hover:border-cyan-400/50 shadow-lg transition-all flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700 text-cyan-400 group-hover:text-brand-orange group-hover:border-orange-500/40 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-base font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
