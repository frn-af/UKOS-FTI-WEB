/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#feeb53",
        secondary: "#aab1b8",
        accents: "#F18D1E",
        main: "#312B2A",
      },
      fontFamily: {
        sans: ["Grotta", ...defaultTheme.fontFamily.sans],
        mono: ["Tusker Grotesk", ...defaultTheme.fontFamily.mono],
      },
    },

    plugins: [],
  },
};
