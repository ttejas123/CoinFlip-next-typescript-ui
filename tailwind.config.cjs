/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        lightBg: "url('../assets/img/bg-light.png')",
      }),
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      display: [
        "6rem",
        { fontWeight: "700", letterSpacing: "-0.04em", lineHeight: "120%" },
      ],
      h1: ["4.5rem", { fontWeight: "700" }],
      h2: ["4rem", { fontWeight: "700" }],
      h3: ["3.5rem", { fontWeight: "700" }],
      h4: ["3rem", { fontWeight: "700" }],
      "subtitle-big": ["2.5rem", { fontWeight: "700" }],
      subtitle: ["2rem", { fontWeight: "600" }],
      "base-big": ["1.5rem", { fontWeight: "400" }],
      "base-bold": ["1.25rem", { fontWeight: "700" }],
      base: ["1rem", { fontWeight: "400" }],
      overline: ["0.813rem", { fontWeight: "600", textTransform: "uppercase" }],
    },
  },
  daisyui: {
    themes: [
      {
        lightBuild: {
          default: "#A1A2B3",
          "default-focus": "#858694",
          primary: "#FA4F00",
          "primary-focus": "#C83F00",
          secondary: "#311F42",
          "secondary-focus": "#271935",
          accent: "#121212",
          "accent-focus": "#0E0E0E",
          "accent-content": "#FEFEFE",
        }
      },
      {
        darkBuild: {
          default: "#000",
          "default-focus": "#000",
          primary: "#000",
          "primary-focus": "#000",
          secondary: "#000",
          "secondary-focus": "#000",
          accent: "#000",
          "accent-focus": "#000",
          "accent-content": "#000",
        }
      }
    ],
  },
  plugins: [require("daisyui")],
};
