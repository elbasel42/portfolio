import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      transitionDuration: {
        "1300": "1300ms",
        "1500": "1500ms",
        "2000": "2000ms",
        "3000": "3000ms",
        "4000": "4000ms",
        "5000": "5000ms",
        "6000": "6000ms",
      },
      translate: {
        screen: "100vh",
        "1000": "1000px",
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: ["translate-y-screen", "translate-y-1000"],
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
export default config;
