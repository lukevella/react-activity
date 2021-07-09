const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

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
    library: {
      name: "ReactActivity",
      type: "umd",
      umdNamedDefine: true,
    },
    globalObject: "this",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
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
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
