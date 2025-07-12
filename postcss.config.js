export default {
  plugins: {
    autoprefixer: {}, // Autoprefixer will be applied
    "postcss-dark-theme-class": {},
    "postcss-preset-env": {
      "features": {
        "logical-properties-and-values": false
      }
    }
  },
};