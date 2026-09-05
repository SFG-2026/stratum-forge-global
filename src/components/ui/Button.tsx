import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "orange" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  icon?: React.ReactNode;
  asLink?: boolean;
  href?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  icon,
  className = "",
  asLink = false,
  href,
  onClick,
  ...props
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-display font-bold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed select-none group";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30 focus:ring-blue-600 border border-blue-600",
    secondary:
      "bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-600 border border-slate-300 hover:border-blue-300 shadow-sm focus:ring-slate-400",
    orange:
      "bg-gradient-to-r from-brand-orange to-[#FF7A1A] text-white shadow-md shadow-orange-500/25 hover:from-[#E64C00] hover:to-brand-orange-light hover:shadow-lg hover:shadow-orange-500/35 focus:ring-brand-orange border border-orange-500",
    ghost:
      "bg-transparent text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 border border-transparent focus:ring-blue-300",
    outline:
      "bg-white text-blue-600 hover:bg-blue-50 border border-blue-300 hover:border-blue-500 shadow-sm focus:ring-blue-500",
  };

  const content = (
    <>
      {icon && <span className="flex-shrink-0 transition-transform group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight className="w-4 h-4 text-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (asLink && href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
