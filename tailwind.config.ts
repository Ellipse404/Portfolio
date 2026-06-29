import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "monospace"],
        display: ["var(--font-display)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 70px rgba(168, 85, 247, 0.25)",
        amberGlow: "0 0 70px rgba(245, 158, 11, 0.2)",
      },
      animation: {
        orbit: "orbit 18s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        shimmer: "shimmer 8s linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(118px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(118px) rotate(-360deg)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
