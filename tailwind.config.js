/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        bgLightMode: 'url("../images/bg-curvy-light-mode.svg")',
        bgDarkMode: 'url("../images/bg-curvy-dark-mode.svg")',
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
