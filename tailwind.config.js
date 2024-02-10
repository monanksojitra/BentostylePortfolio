// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      first: {
        DEFAULT: "#FFF",
        100: "#FDFDFD",
        200: "#C0C0C0",
        300: "#BAE6FF",
        400: "#F3ABCB",
        500: "#61BCFF",
        600: "#FFDC58",
        700: "#C5A1FF",
      },
      red: {
        100: " #FF6258",
        200: "#E4643F",
        300: "#F35034",
        400: " #E63E21",
      },
      dark: {
        100: "#545454",
        200: "#3F3E3E",
        300: "#2C2C2C",
        400: "#262626",
        500: "#1B1B1B",
        600: "#161616",
        700: "#202020",
        800: "#231F20",
        900: "#0C0C0C",
        1000: "#c0c0c0",
      },
    },
    extend: {},
  },
  plugins: [],
};
