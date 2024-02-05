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
        gray: {
          600: "#c0bfbf",
          500: "#403e3c",
          400: "#373634",
          300: "#333230",
          200: "#302e2b",
          100: "#262522",
        },
        green: {
          500: "#9dcb5e",
          400: "#88bb51",
          300: "#779556",
          200: "#5e9948",
          100: "#45753c"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
