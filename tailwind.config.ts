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
      },
    },
  },
  plugins: [],
};
export default config;
