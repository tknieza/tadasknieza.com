module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      title: ["Montserrat", "Segoe UI", "Roboto", "Oxygen", "Ubuntu"],
    },
    extend: {
      spacing: {
        "drop-down": "79%",
      },
      colors: {
        "electric-yellow": "#fff744",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
