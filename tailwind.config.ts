import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        tablet: "700px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty:{
        'max-height': 'max-height'
      },
      colors: {
        pBlue: "#003E8F",
        pGrey: "#5C636B",
        pYellow: "#FED500",
        topMenuHead: "#0E0E0E",
        dashHeadText: "#050505",
        dashParagraphText: "#616161",
        cardText: "#858585",
        cardNum: "#0E0B0A",
        graphHead: "#101828",
        graphText: "#667085",
        bggrey: "#F6F6F6"
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      }
    },
  },
  plugins: [],
};
export default config;
