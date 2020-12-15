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
      heading: ["Inter", "sans-serif"],
      sans: ["Lato", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        50: "#F4F4F5",
        100: "#EAEAEB",
        200: "#CACACC",
        300: "#ABABAD",
        400: "#6B6B70",
        500: "#2C2C33",
        600: "#28282E",
        700: "#1A1A1F",
        800: "#141417",
        900: "#0D0D0F",
      },
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
