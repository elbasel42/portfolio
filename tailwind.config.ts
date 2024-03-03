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
        "6000": "6000ms"
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
};
export default config;
