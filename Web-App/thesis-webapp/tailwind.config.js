/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-green": "#001E04",
        "custom-nav-green": "#1E3D22",
        "custom-nav-item-bg": "#225128",
        "custom-h1-text": "#F19C1B",
        "custom-box-1": "#001E04",
      },
    },
    fontFamily: {
      custom: ["Open Sans", "sans-serif"],
    },
    textColor: {
      "custom-text-orange": "#F19C1B",
      "custom-white": "#FFFFFF",
    },
    borderColor: {
      "custom-border": "#F19C1B",
      "custom-border-box-2": "#3A623F",
    },
    boxShadow: {
      "custom-box-shadow": "0px 4px 95px 3px rgba(224, 166, 53, 0.25)",
      "custom-box-shadow-2": "0px 4px 95px 3px rgba(53, 224, 101, 0.25)",
    },
  },
  plugins: [],
};
