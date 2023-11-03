import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "search-icon": 'url("/icons/search-icon.svg")',
        card: "linear-gradient(158.84deg, #252a32 4%, rgba(38, 43, 51, 0) 91.93%)",
        "liked-button":
          "linear-gradient(137deg, #21262E 4.28%, #0C0F14 93.52%)",
      },
    },
  },
  plugins: [],
};
export default config;
