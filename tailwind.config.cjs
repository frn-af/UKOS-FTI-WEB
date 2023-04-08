/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Grotta", ...defaultTheme.fontFamily.sans],
        mono: ["Tusker Grotesk", ...defaultTheme.fontFamily.mono],
      },
    },
    plugins: [],
  },
};
