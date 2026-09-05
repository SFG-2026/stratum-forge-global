import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "electric" | "orange" | "silver" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cyan",
  className = "",
  icon,
}) => {
  const variantStyles = {
    cyan: "bg-blue-50 text-brand-electric border-blue-200 shadow-sm",
    electric: "bg-blue-600 text-white border-blue-700 shadow-sm",
    orange: "bg-orange-50 text-brand-orange border-orange-200 shadow-sm",
    silver: "bg-slate-100 text-slate-700 border-slate-200",
    outline: "bg-white text-slate-700 border-slate-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold rounded-full border tracking-wide uppercase ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
