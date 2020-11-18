module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./styles/**/*.css", "./modules/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    filter: {
      none: "none",
      "blur-10": "blur(10px)",
    },
    fontFamily: {
      heading: ["Montserrat", "sans-serif"],
      sans: ["Lato", "sans-serif"],
    },
    extend: {
      spacing: {
        "01e": "0.1em",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-filters")],
};
