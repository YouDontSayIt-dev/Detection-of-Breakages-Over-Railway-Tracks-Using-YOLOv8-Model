/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        customBackground: "#071017",
        customSidebarColor: "#228A88",
        customSubOption: "#D6D6D6",
        customActiveOption: "#EBEBEB",
      },
    },
    fontFamily: {
      Open: ["Open Sans"],
    },
    textColor: {
      ebony: "#EBEBEB",
      active: "#228A88",
    },
    borderColor: {},
    boxShadow: {},
    fill: {},
    textShadow: {
      md: "0px 0px 20px #228A88",
    },
  },
  plugins: [],
};
