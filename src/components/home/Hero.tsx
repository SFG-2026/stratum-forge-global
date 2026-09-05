import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { AnimatedHeroCanvas } from "../ui/AnimatedHeroCanvas";
import {
  Cpu,
  RefreshCw,
  TrendingUp,
  Activity,
  Layers,
  Wrench,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { BRAND_DATA } from "../../data/content";

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onContact }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Each stage uses a dedicated, unique high-res image
  const streamStages = [
    { id: 1, name: "DEVICE", icon: Cpu, label: "Asset Intake", img: "/images/logistics_hub.jpg", metric: "100% Serialized Intake", spec: "ISO-14001" },
    { id: 2, name: "DIAGNOSE", icon: Activity, label: "ATE Testing", img: "/images/diagnostics_lab.jpg", metric: "Signal Profiling", spec: "<10ms Fault" },
    { id: 3, name: "REPAIR", icon: Wrench, label: "SMD Rework", img: "/images/component_rework.jpg", metric: "Precision Soldering", spec: "IPC Standard" },
    { id: 4, name: "REFURBISH", icon: RefreshCw, label: "Recertify", img: "/images/server_room.jpg", metric: "Burn-in Soak", spec: "99.8% Reliability" },
    { id: 5, name: "RETURN", icon: Layers, label: "Redeploy", img: "/images/global_shipping.jpg", metric: "Global Transit", spec: "Bonded Hub" },
    { id: 6, name: "VALUE", icon: TrendingUp, label: "Recover ROI", img: "/images/circuit_closeup.jpg", metric: "Yield & ESG", spec: "Up to 70% ROI" },
  ];

  // Auto-cycle through stages smoothly
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 6 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentStage = streamStages.find((s) => s.id === activeStep) || streamStages[0];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50">
      
      {/* 1. Fully Animated Interactive Circuit Network Canvas (60fps Particles + Pulse Lines) */}
      <AnimatedHeroCanvas />

      {/* 2. Dynamic Luminous Color Gradient Aura behind Title */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] md:w-[900px] h-[300px] sm:h-[450px] bg-gradient-to-tr from-blue-500/15 via-cyan-400/15 to-orange-400/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none z-0 animate-pulse-subtle" />

      {/* 3. Floating Geometric 3D Brand Strata (Animated Depth Layer) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-Left Glowing Chevron */}
        <div className="absolute top-20 sm:top-24 left-[3%] sm:left-[5%] animate-float-slow opacity-20 sm:opacity-25">
          <svg width="70" height="70" viewBox="0 0 100 100" fill="none" className="text-blue-600 drop-shadow-md sm:w-[100px] sm:h-[100px]">
            <path d="M10 75 L45 30 L80 75 L65 75 L45 48 L25 75 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Top-Right Glowing Cyan Arrow */}
        <div className="absolute top-24 sm:top-28 right-[3%] sm:right-[6%] animate-float-slower opacity-25 sm:opacity-30">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="text-cyan-500 drop-shadow-md sm:w-[120px] sm:h-[120px]">
            <path d="M15 85 L50 35 L85 85 L70 85 L50 52 L30 85 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Mid-Left Orange Accent Arrow */}
        <div className="absolute top-[55%] left-[1%] sm:left-[2%] animate-float-reverse opacity-30 sm:opacity-35">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-brand-orange drop-shadow-sm sm:w-[80px] sm:h-[80px]">
            <path d="M20 80 L50 35 L80 80 L65 80 L50 55 L35 80 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Top Official Brand Badge - Fully Mobile Responsive */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-slate-200 shadow-sm hover:scale-105 transition-transform duration-300">
            <img
              src="/logo.png"
              alt="StratumForge Global"
              className="w-5 h-5 sm:w-7 sm:h-7 object-contain drop-shadow-sm"
            />
            <span className="text-[11px] sm:text-sm font-mono font-extrabold text-[#0A2540] uppercase tracking-wider">
              StratumForge Global
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50/90 backdrop-blur-md border border-blue-200/80 text-blue-700 font-mono text-[10px] sm:text-xs font-bold shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Lifecycle & Engineering • India & South Asia</span>
          </div>
        </div>

        {/* Scalable Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-display font-black tracking-tight text-[#0A2540] max-w-6xl leading-[1.05] sm:leading-[1.02]">
          Technology Reimagined. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-brand-orange animate-pulse-subtle">
            Value Restored.
          </span>
        </h1>

        {/* Hero Supporting Text */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-2xl text-slate-700 max-w-4xl font-sans font-medium leading-relaxed px-2">
          {BRAND_DATA.missionStatement}
        </p>

        {/* Strategic Capabilities Pills - Clean Mobile Wrapping */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-4xl text-[11px] sm:text-xs md:text-sm font-mono font-bold text-slate-700">
          <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
            EMS Manufacturing
          </span>
          <span className="text-brand-orange font-black hidden sm:inline">•</span>
          <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
            Diagnostics & Testing
          </span>
          <span className="text-blue-600 font-black hidden sm:inline">•</span>
          <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
            Repair & Refurbishment
          </span>
          <span className="text-brand-orange font-black hidden sm:inline">•</span>
          <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
            Field Services
          </span>
        </div>

        {/* Action CTAs - Responsive Stacking */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Button
            variant="orange"
            size="lg"
            withArrow
            onClick={onExplore}
            className="w-full sm:w-auto text-sm sm:text-base font-extrabold px-6 py-3.5 sm:px-7 sm:py-3.5 shadow-lg shadow-orange-500/25 hover:scale-105 transition-all"
          >
            Explore Capabilities
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={onContact}
            className="w-full sm:w-auto text-sm sm:text-base font-bold px-6 py-3.5 sm:px-7 sm:py-3.5 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-sm hover:bg-white hover:border-blue-400 transition-all"
          >
            Talk to Our Team
          </Button>
        </div>

        {/* Dynamic Connected Technology Lifecycle Stream Visualizer (3x2 on mobile, 6 on desktop) */}
        <div className="mt-8 sm:mt-10 w-full max-w-5xl">
          <div
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border border-slate-200/90 shadow-xl shadow-blue-950/5 relative overflow-hidden"
          >
            {/* Lifecycle Stages Tabs (3 cols on mobile, 6 cols on md+) */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5 sm:gap-2.5">
              {streamStages.map((stage, idx) => {
                const IconComponent = stage.icon;
                const isSelected = activeStep === stage.id;
                const isLast = idx === streamStages.length - 1;

                return (
                  <button
                    key={stage.id}
                    onClick={() => {
                      setActiveStep(stage.id);
                      setIsAutoPlaying(false);
                    }}
                    className={`relative p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-left transition-all duration-300 flex flex-col justify-between h-20 sm:h-24 border overflow-hidden group ${
                      isSelected
                        ? isLast
                          ? "bg-orange-50/90 border-brand-orange shadow-md text-[#0A2540]"
                          : "bg-blue-50/90 border-blue-600 shadow-md text-[#0A2540]"
                        : "bg-slate-50/80 border-slate-200/80 text-slate-700 hover:border-blue-300 hover:bg-white hover:text-slate-900"
                    }`}
                  >
                    {/* Top Active Progress Line */}
                    {isSelected && (
                      <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden bg-slate-200">
                        <div
                          className={`h-full ${isLast ? "bg-brand-orange" : "bg-blue-600"}`}
                          style={{
                            width: "100%",
                            transition: isAutoPlaying ? "width 4000ms linear" : "width 300ms ease",
                          }}
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between w-full">
                      <span className={`text-[9px] sm:text-[11px] font-mono font-extrabold ${
                        isSelected ? (isLast ? "text-brand-orange" : "text-blue-600") : "text-slate-400"
                      }`}>
                        0{stage.id}
                      </span>
                      <IconComponent className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        isSelected ? (isLast ? "text-brand-orange" : "text-blue-600") : "text-slate-400 group-hover:text-blue-600"
                      }`} />
                    </div>

                    <div>
                      <div className="text-[10px] sm:text-xs font-display font-extrabold tracking-wider leading-tight truncate">{stage.name}</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-500 font-sans font-medium mt-0.5 truncate">{stage.label}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Visual Photo Stream Banner with Deep Stage Telemetry */}
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center text-left">
              <div className="md:col-span-5 h-28 sm:h-36 rounded-xl sm:rounded-2xl overflow-hidden relative shadow-sm border border-slate-200 group">
                <img
                  key={currentStage.img}
                  src={currentStage.img}
                  alt={currentStage.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-2.5 sm:p-3">
                  <span className="text-[8px] sm:text-[9px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    STAGE 0{currentStage.id} PROTOCOL
                  </span>
                  <span className="text-xs sm:text-sm font-display font-extrabold text-white truncate">
                    {currentStage.name} • {currentStage.label}
                  </span>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col justify-between space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-700 font-sans leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Protocol 0{activeStep}:{" "}
                    <strong className="text-[#0A2540] font-mono font-bold">
                      {currentStage.name}
                    </strong>{" "}
                    — Standardized diagnostics, failure analysis, and high-yield value recovery.
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-blue-200 font-bold">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" />
                    <span>{currentStage.metric}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-slate-200 font-semibold">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-600" />
                    <span>{currentStage.spec}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-brand-orange bg-orange-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-orange-200 font-bold">
                    <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>Zero Waste</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
