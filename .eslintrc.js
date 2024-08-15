module.exports = {
  root: true,
  extends: ["@react-native", "prettier", "eslint-config-prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react-native/no-inline-styles": 0,
    quotes: [2, "double", {avoidEscape: true}],
    "prettier/prettier": ["error", {singleQuote: false}],
  },
};
