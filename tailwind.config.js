/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F8FAFC',
          card: '#FFFFFF',
          elevated: '#F0F5FA',
          border: '#E2E8F0',
          'border-highlight': 'rgba(0, 102, 255, 0.25)',
        },
        warm: {
          50: '#FFFDF9',
          100: '#FFF7ED',
          200: '#FFEDD5',
        },
        brand: {
          navy: '#0A2540',
          midnight: '#07172C',
          charcoal: '#0F172A',
          electric: '#0066FF',
          'electric-dark': '#0052CC',
          'electric-light': '#2E82FF',
          cyan: '#0099CC',
          'cyan-light': '#00B4D8',
          orange: '#FF5A1F',
          'orange-light': '#FF7A45',
          'orange-glow': 'rgba(255, 90, 31, 0.25)',
          silver: '#64748B',
          platinum: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 153, 204, 0.35)',
        'glow-electric': '0 10px 30px -5px rgba(0, 102, 255, 0.3)',
        'glow-orange': '0 10px 30px -5px rgba(255, 90, 31, 0.35)',
        'card-soft': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 40px -15px rgba(0, 102, 255, 0.12), 0 0 15px 1px rgba(0, 153, 204, 0.1)',
      },
      animation: {
        'aurora': 'aurora 18s ease infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-slower': 'float-slower 12s ease-in-out infinite',
        'float-reverse': 'float-reverse 10s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '50% 100%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 0%' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(-4deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(16px) rotate(2deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
