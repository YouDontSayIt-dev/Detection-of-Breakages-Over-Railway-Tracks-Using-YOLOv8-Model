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
      Poppins: ["Poppins"],
    },
    textColor: {
      ebony: "#EBEBEB",
      active: "#228A88",
    },
    borderRadius: {
      customBtn: "20px 20px 20px 20px",
      customFile: "20px 0px 0px 20px",
      customImageDisplay: "24px",
      customCanvasDisplay: "15px",
    },
    // Customize border color
    borderColor: {
      customBtn: "#228A88",
      customFile: "#228A88",
      customImageDisplay: "#FFF",
    },
    textShadow: {
      md: "0px 0px 20px #228A88",
    },
    boxShadow: {
      customShadow: "0px 8px 12.3px 0px #228A88",
      customImageDisplay: "0px 4px 20px 0px #228A88",
    },
  },
  plugins: [],
};
