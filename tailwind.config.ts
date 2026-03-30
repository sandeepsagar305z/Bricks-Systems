import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0a1744",
          light: "#f4f7fa",
          rust: "#c2410c",
          amber: "#d97706",
          gray: "#4b5563",
          border: "#e5e7eb",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'nav': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(10vh) translateX(0) scale(0.8)', opacity: '0' },
          '20%': { opacity: '0.4' },
          '80%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-90vh) translateX(50px) scale(1.1)', opacity: '0' },
        }
      },
      animation: {
        'float-1': 'floatUp 20s linear infinite',
        'float-2': 'floatUp 25s linear infinite',
        'float-3': 'floatUp 30s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
