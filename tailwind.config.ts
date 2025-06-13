import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add a new font family
        sans: ["var(--font-inter)"], // Your default sans-serif
        bebas: ["var(--font-bebas-neue)"], // Your new display font
      },
    },
  },
  plugins: [],
};
export default config;
