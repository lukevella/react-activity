const path = require("path");

module.exports = {
  entry: {
    library: {
      import: "./src/react-activity.ts",
      filename: "react-activity.js",
    },
    Bounce: "./src/Bounce/index.ts",
    Digital: "./src/Digital/index.ts",
    Levels: "./src/Levels/index.ts",
    Sentry: "./src/Sentry/index.ts",
    Dots: "./src/Dots/index.ts",
    Windmill: "./src/Windmill/index.ts",
    Spinner: "./src/Spinner/index.ts",
    Squares: "./src/Squares/index.ts",
  },
  externals: {
    react: "react",
  },
  output: {
    filename: "[name]/index.js",
    library: "ReactActivity",
    libraryTarget: "umd",
    umdNamedDefine: true,
    path: path.resolve(__dirname, "dist"),
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, "src/tsconfig.json"),
        },
      },
    ],
  },
};
