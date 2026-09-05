export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortCode: string;
  tagline: string;
  description: string;
  capabilities: string[];
  keyBenefits: string[];
  specs: { label: string; value: string }[];
}

export interface LifecycleStage {
  id: string;
  step: number;
  name: string;
  summary: string;
  detail: string;
  iconName: string;
}

export const BRAND_DATA = {
  name: "StratumForge Global",
  legalName: "StratumForge Global Private Limited",
  tagline: "Technology Reimagined. Value Restored.",
  missionStatement:
    "We extend the lifecycle of devices, recover hidden value, and deliver sustainable technology solutions across India and South Asia.",
  contact: {
    email: "admin@stratumforgeglobal.com",
    location: "Chennai, India",
    region: "India & South Asia",
    phone: "+91 7483545473 / +91 9566065552",
    phonePrimary: "+91 7483545473",
    phoneSecondary: "+91 9566065552",
  },
  stats: [
    {
      value: "100K+",
      numericValue: 100,
      suffix: "K+",
      label: "Devices Serviced",
      description: "Extending device lifespan with precision diagnostics and component-level rework.",
    },
    {
      value: "Thousands of Tons",
      numericValue: 4200,
      prefix: "> ",
      suffix: " Tons",
      label: "CO₂ Emissions Reduced",
      description: "Tangible environmental offset through component recovery and e-waste prevention.",
    },
    {
      value: "Trusted by",
      highlightText: "Leading OEMs & Enterprises",
      label: "Trusted by Leading OEMs & Enterprises",
      description: "Strategic partnerships across manufacturing, computing, and enterprise infrastructure.",
    },
  ],
  dna: {
    heading: "Our DNA: People × Purpose × Performance",
    body: "We believe every device deserves a second chance. Our approach combines technical expertise, disciplined processes, and a people-first culture to deliver consistent results across all operations.",
    pillars: [
      {
        number: "01",
        title: "REPAIR WITH INTELLIGENCE",
        description: "Advanced diagnostics, deep component expertise, and standardized workflows.",
        detail: "Leveraging automated test benches, schematic reverse mapping, and high-precision SMD/BGA rework protocols.",
      },
      {
        number: "02",
        title: "GROW THROUGH PEOPLE",
        description: "Investing in skill development, curiosity, and career growth.",
        detail: "Continuous technical upskilling in electronics engineering, quality assurance, and modern diagnostic platforms.",
      },
      {
        number: "03",
        title: "PERFORM WITH CONSISTENCY",
        description: "Seamless experiences across every location, rooted in one global standard.",
        detail: "Unified quality thresholds, ESD-controlled environments, and real-time tracking across all service touchpoints.",
      },
    ],
  },
  services: [
    {
      id: "ems",
      number: "01",
      title: "Electronics Manufacturing Services",
      shortCode: "EMS",
      tagline: "Scalable production tailored to client needs.",
      description:
        "End-to-end electronics manufacturing capabilities from rapid prototyping to high-volume assembly, box builds, and integrated testing.",
      capabilities: [
        "Surface Mount Technology (SMT) & Through-Hole Assembly",
        "Box-build and electro-mechanical system integration",
        "Rigorous In-Circuit (ICT) and Functional Testing (FCT)",
        "Prototyping, pilot runs, and high-mix production scalability",
      ],
      keyBenefits: [
        "Flexible batch scaling with zero quality drift",
        "Design for Manufacturability (DFM) optimization",
        "Traceability across component batches",
      ],
      specs: [
        { label: "Deployment Scope", value: "India & South Asia Hubs" },
        { label: "Assembly Format", value: "SMT, THT, Box Build" },
        { label: "Testing Protocols", value: "ICT, FCT, Thermal Soak" },
      ],
    },
    {
      id: "diagnostics",
      number: "02",
      title: "Diagnostics & Testing",
      shortCode: "DIAG",
      tagline: "Precision evaluation for devices and components.",
      description:
        "Comprehensive electrical, thermal, and signal verification to identify micro-fractures, intermittent failures, and degradation before full deployment.",
      capabilities: [
        "Automated Test Equipment (ATE) diagnostics",
        "Signal integrity and voltage variance analysis",
        "High-density board-level fault tracing",
        "Thermal stress testing & environmental validation",
      ],
      keyBenefits: [
        "Elimination of No-Fault-Found (NFF) recurrences",
        "Root cause isolation down to trace and component level",
        "Data-backed yield enhancement reporting",
      ],
      specs: [
        { label: "Analysis Granularity", value: "Component & Circuit Level" },
        { label: "Methodology", value: "Automated & Benchtop ATE" },
        { label: "Reporting", value: "Deep Telemetry & Root Cause Logs" },
      ],
    },
    {
      id: "repair-refurbishment",
      number: "03",
      title: "Repair & Refurbishment",
      shortCode: "REPAIR",
      tagline: "Complex repairs, lifecycle extension, and value recovery.",
      description:
        "Advanced component-level rework, micro-soldering, BGA reballing, and restoration of mission-critical hardware to OEM performance metrics.",
      capabilities: [
        "High-yield Motherboard & Logic Board Rework",
        "BGA & Fine-pitch SMD component replacement",
        "Power supply and inverter restoration",
        "Cosmetic reconditioning and chassis remediation",
      ],
      keyBenefits: [
        "Up to 70% cost reduction versus complete unit replacement",
        "Maximized return on capital electronics assets",
        "Strict OEM performance validation post-rework",
      ],
      specs: [
        { label: "Target Categories", value: "Desktops, Servers, Notebooks, Displays" },
        { label: "Rework Tier", value: "Tiers 1-4 / Micro-level" },
        { label: "Quality Standard", value: "100% Functional Benchmarking" },
      ],
    },
    {
      id: "field-services",
      number: "04",
      title: "Field Services",
      shortCode: "FIELD",
      tagline: "Deployment, onsite support, and customer engagement.",
      description:
        "On-the-ground engineering support, installation, enterprise rollouts, RMA management, and reverse logistics across regional hubs.",
      capabilities: [
        "SLA-driven onsite diagnostics and part swapping",
        "Enterprise asset rollout and commissioning",
        "De-installation and secure transit packaging",
        "Reverse logistics orchestration and tracking",
      ],
      keyBenefits: [
        "Rapid turnaround across tier-1 and tier-2 locations",
        "Single point of operational accountability",
        "Zero disruption to enterprise workflow",
      ],
      specs: [
        { label: "Coverage", value: "Strategic Regional Hubs (India & South Asia)" },
        { label: "SLA Framework", value: "Customized Enterprise Tier SLAs" },
        { label: "Asset Handling", value: "Chain-of-Custody Secure Transit" },
      ],
    },
    {
      id: "supply-chain",
      number: "05",
      title: "Supply Chain & Sourcing",
      shortCode: "SUPPLY",
      tagline: "Quality-driven procurement and logistics assurance.",
      description:
        "Authentic component procurement, buffer stock management, lifecycle risk mitigation, and verified secondary parts supply.",
      capabilities: [
        "Global OEM-grade component sourcing",
        "Buffer inventory staging for critical spare parts",
        "Counterfeit screening & physical authenticity validation",
        "End-of-Life (EOL) & obsolete part recovery",
      ],
      keyBenefits: [
        "Resilient parts availability avoiding line stoppages",
        "Verified authentication eliminating counterfeit risks",
        "Predictable procurement pricing and lead times",
      ],
      specs: [
        { label: "Verification", value: "100% Anti-Counterfeit Screening" },
        { label: "Inventory Strategy", value: "Just-In-Time + Critical Buffer" },
        { label: "Compliance", value: "RoHS / Enterprise Standards" },
      ],
    },
  ] as ServiceItem[],
  lifecycle: [
    {
      id: "source",
      step: 1,
      name: "SOURCE",
      summary: "Strategic Procurement & Intake",
      detail: "Intake of enterprise hardware, decommissioned assets, and precision components with serialized chain-of-custody logging.",
      iconName: "Truck",
    },
    {
      id: "manufacture",
      step: 2,
      name: "MANUFACTURE",
      summary: "Assembly & Build",
      detail: "High-spec EMS production, sub-assembly integration, and electro-mechanical assembly tailored to OEM specifications.",
      iconName: "Cpu",
    },
    {
      id: "diagnose",
      step: 3,
      name: "DIAGNOSE",
      summary: "Automated Fault Tracing",
      detail: "Pinpointing root cause electrical anomalies, micro-fractures, and thermal stresses using advanced test equipment.",
      iconName: "Activity",
    },
    {
      id: "repair",
      step: 4,
      name: "REPAIR",
      summary: "Precision Component Rework",
      detail: "BGA reballing, micro-soldering, and board-level restoration by certified engineering technicians.",
      iconName: "Wrench",
    },
    {
      id: "refurbish",
      step: 5,
      name: "REFURBISH",
      summary: "Reconditioning & Validation",
      detail: "Full system cosmetic remediation, thermal repasting, stress-soak testing, and performance recertification.",
      iconName: "RotateCcw",
    },
    {
      id: "deploy",
      step: 6,
      name: "DEPLOY",
      summary: "Field Support & Delivery",
      detail: "SLA-backed regional redeployment, onsite technical integration, and proactive customer engagement.",
      iconName: "Send",
    },
    {
      id: "recover-value",
      step: 7,
      name: "RECOVER VALUE",
      summary: "Lifecycle Extension & ROI",
      detail: "Restoring financial value, harvesting high-demand components, and dramatically cutting corporate e-waste.",
      iconName: "TrendingUp",
    },
  ] as LifecycleStage[],
  refurbishment: {
    heading: "Extend Life. Enhance Reliability.",
    subheading:
      "We specialize in recovering and reconditioning functional components from desktops, monitors, servers, and notebooks—delivering parts that perform to industry standards.",
    quote: "We don’t just refurbish—we engineer confidence back into your systems.",
    capabilities: [
      {
        title: "COMPONENT RECOVERY",
        description: "Precision harvesting of high-value parts for reuse in production lines.",
        points: [
          "Non-destructive desoldering and harvesting",
          "Pin-level electrical impedance validation",
          "Immediate cataloging into verified inventory",
        ],
      },
      {
        title: "FAILURE ANALYSIS",
        description: "Pinpointing root causes to strengthen system design and prevent downtime.",
        points: [
          "Microscopic solder joint inspection",
          "Thermal dissipation and power rail profiling",
          "Preventative design feedback for OEM partners",
        ],
      },
      {
        title: "REFURBISHMENT EXCELLENCE",
        description: "Restoring components to peak performance with rigorous testing and validation.",
        points: [
          "Extended burn-in and benchmark soak testing",
          "Graded cosmetic and functional certification",
          "ESD-controlled handling from intake to dispatch",
        ],
      },
    ],
    devices: [
      { name: "Enterprise Servers", desc: "Motherboards, redundant PSUs, RAID controllers, backplanes" },
      { name: "Commercial Desktops", desc: "Logic boards, power supplies, thermal modules, interfaces" },
      { name: "Workstation Notebooks", desc: "Displays, high-density PCBs, keyboards, battery management" },
      { name: "Monitors & Displays", desc: "T-Con boards, LED drivers, power bricks, scalar panels" },
    ],
  },
  whyChooseUs: [
    {
      id: "cost",
      title: "COST ADVANTAGE",
      description: "Lower procurement costs without compromising quality.",
      detail: "Recovering functional components and restoring board-level hardware yields significant cost savings compared to newly fabricated units.",
      iconName: "Coins",
    },
    {
      id: "sustainability",
      title: "SUSTAINABILITY",
      description: "Reduce e-waste while supporting eco-conscious manufacturing.",
      detail: "Engineered circularity that diverts metric tons of complex electronics from landfills while lowering embodied carbon emissions.",
      iconName: "Leaf",
    },
    {
      id: "reliability",
      title: "ASSURED RELIABILITY",
      description: "Every part is tested to meet demanding operational benchmarks.",
      detail: "Zero tolerance for unverified hardware. Every component undergoes rigorous automated testing, burn-in validation, and QA certification.",
      iconName: "ShieldCheck",
    },
    {
      id: "precision",
      title: "PRECISION ENGINEERING",
      description: "Technical expertise and disciplined processes designed for consistent outcomes.",
      detail: "Standardized operating procedures, IPC-compliant micro-soldering, and continuous process monitoring across regional operations.",
      iconName: "Layers",
    },
  ],
  partnerEcosystem: {
    heading: "Built on Strong Partnerships.",
    body: "We collaborate with OEMs, logistics providers, and global brands to create a connected ecosystem.",
    supportingText:
      "Together, we align processes, quality standards, and logistics flows to deliver consistent outcomes across regions.",
    nodes: [
      { id: "oems", title: "Original Equipment Manufacturers (OEMs)", role: "Direct technical alignment, warranty fulfillment & component specifications" },
      { id: "stratumforge", title: "StratumForge Global Hub", role: "Central intelligence, diagnostics, refurbishment & engineering execution", isCenter: true },
      { id: "logistics", title: "Specialized Logistics Providers", role: "Secure chain-of-custody, reverse logistics & regional transit" },
      { id: "technology", title: "Technology Partners", role: "Automated test equipment, firmware diagnostics & tooling providers" },
      { id: "enterprises", title: "Global & Regional Enterprises", role: "Fleet lifecycle management, onsite field support & value recovery" },
    ],
  },
  sustainability: {
    headline: "Repair. Recover. Reuse. Reduce Waste.",
    body:
      "Extending the life of technology directly mitigates the immense carbon cost of manufacturing new semiconductor silicon and motherboards. By re-engineering, harvesting, and recertifying hardware, StratumForge Global translates environmental responsibility into tangible enterprise performance.",
    pillars: [
      { label: "Device Servicing", value: "Maximizing lifespan before end-of-use" },
      { label: "Refurbishment", value: "Grade-A reconditioning for secondary life" },
      { label: "Component Recovery", value: "Harvesting micro-chips and passives for reuse" },
      { label: "Value Recovery", value: "Recovering capital trapped in dormant assets" },
      { label: "CO₂ Reduction", value: "Diverting thousands of tons of embodied carbon" },
    ],
  },
  careers: {
    heading: "Bring Your Best. Build What Matters.",
    copy: "Every team member plays a role in keeping technology alive. If you take pride in doing meaningful work, this is where you can thrive.",
    highlights: [
      { title: "Collaborative Culture", desc: "Cross-functional teams of hardware engineers, diagnosticians, and supply chain specialists working with high autonomy." },
      { title: "Growth-Focused Training", desc: "Structured mentorship, hands-on certification in micro-rework, ESD safety, and automated diagnostic toolchains." },
      { title: "Purpose-Driven Projects", desc: "Tangible impact extending the technological frontier and reducing global e-waste across South Asia." },
    ],
    openings: [
      { role: "Senior Diagnostic & Test Engineer", dept: "Engineering", location: "Chennai, India", type: "Full-Time" },
      { role: "Electronics Rework Specialist (BGA / SMD)", dept: "Technical Operations", location: "Chennai, India", type: "Full-Time" },
      { role: "Field Service Lead (Enterprise Deployments)", dept: "Field Support", location: "Regional South Asia", type: "Full-Time" },
      { role: "Technical Sourcing & Supply Chain Specialist", dept: "Procurement", location: "Chennai, India", type: "Full-Time" },
    ],
  },
  contactCTA: {
    heading: "Let's Build What's Next.",
    copy: "Have a technology, repair, refurbishment, manufacturing, or lifecycle challenge? Let's explore how StratumForge Global can help.",
    primaryCTA: "Let's Talk",
    secondaryCTA: "Explore Our Services",
  },
};
