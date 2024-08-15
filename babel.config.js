module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    "nativewind/babel",
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
      },
    ],
    [
      "module-resolver",
      {
        extensions: [".ios.js", ".android.js", ".ios.jsx", ".android.jsx", ".js", ".jsx", ".json", ".ts", ".tsx"],
        root: ["./src"],
        alias: {
          "@": "./src",
        },
      },
    ],
  ],
};
