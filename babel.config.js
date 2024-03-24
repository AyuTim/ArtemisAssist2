module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"], // Specify the root directory
          extensions: [".tsx", ".ts", ".js", ".json"],
          alias: {
            "@components": "./src/components", // Alias for components
            "@assets": "./src/assets", // Alias for assets
            // Add more aliases as needed
          },
        },
      ],
      "react-native-reanimated/plugin", // Other plugins you are using
    ],
  };
};
