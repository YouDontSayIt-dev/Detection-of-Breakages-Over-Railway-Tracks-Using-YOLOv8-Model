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
        "custom-bg-upload": "#212121",
        "custom-bg-radio": "#3a623f",
        "linear-gradient": "linear-gradient(90deg, #43ff64d9 0%, #3a623f 100%)",
      },
    },
    fontFamily: {
      custom: ["Open Sans", "sans-serif"],
      Open: ["Open Sans"],
    },
    textColor: {
      "custom-text-orange": "#F19C1B",
      "custom-white": "#FFFFFF",
      "custom-upload-text": "#e8e8e8",
    },
    borderColor: {
      "custom-border": "#F19C1B",
      "custom-border-box-2": "#3A623F",
      "custom-border-upload": "#e8e8e8",
      "custom-border-radio": "#43ff64d9",
    },
    boxShadow: {
      "custom-box-shadow": "0px 4px 95px 3px rgba(224, 166, 53, 0.25)",
      "custom-box-shadow-2": "0px 4px 95px 3px rgba(53, 224, 101, 0.25)",
      "custom-box-shadow-upload": "0px 48px 35px -48px rgba(232, 232, 232, 1)",
      "custom-box-shadow-inference-btn": "2px 2px 4px rgba(0,0,0,0.4)",
    },
    fill: {
      "custom-fill": "#e8e8e8",
    },
    from: {
      "custom-from": "#43ff64d9",
    },
  },
  plugins: [],
};
