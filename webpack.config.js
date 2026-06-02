// Bundles the React single-page app, shared styles, and static media assets.
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { config: loadEnv } = require("dotenv");

loadEnv({
  path: process.env.DOTENV_CONFIG_PATH || path.resolve(__dirname, ".env"),
  quiet: true,
});

const showConferencePages = ["1", "true", "yes"].includes(
  String(process.env.YFG_SHOW_CONFERENCE_PAGES || "").toLowerCase()
);

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff2?|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/faviconBlack.png"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "dist"),
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
    new webpack.DefinePlugin({
      __YFG_SHOW_CONFERENCE_PAGES__: JSON.stringify(showConferencePages),
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open: true,
  },
  devtool: "source-map",
};
