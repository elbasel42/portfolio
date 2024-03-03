import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      transitionDuration: {
        "1300": "1300ms",
        "1500": "1500ms",
        "2000": "2000ms",
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("tailwindcss-animate")],
};
export default config;
