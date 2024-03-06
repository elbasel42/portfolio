import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
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
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/forms"),
  ],
};
export default config;
