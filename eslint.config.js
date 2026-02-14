const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  prettierRecommended,
  {
    ignores: [
      "node_modules/**", // 🔥 important
      ".expo/**",
      "dist/**",
      "build/**",
    ],
    rules: {
      // 🔥 allow both ' and "
      quotes: "off",

      // 🔥 disable prettier formatting complaints
      "prettier/prettier":'off',
    },
  },
]);
