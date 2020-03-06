const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssnano = require("cssnano");

const prod = "production";
const dev = "development";

// determine build env
const TARGET_ENV = process.env.npm_lifecycle_event === "build" ? prod : dev;
const isDev = TARGET_ENV == dev;
const isProd = TARGET_ENV == prod;

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  "css-loader",
  { loader: "postcss-loader", options: { plugins: [cssnano()] } }
];

const plugins = [
  new HtmlWebpackPlugin({
    title: "Elm SemanticUI Starter",
    template: "./public/index.html"
  }),
  new MiniCssExtractPlugin({
    filename: "styles.css"
  })
];

if (isProd) {
  plugins.push(new CleanWebpackPlugin());
}

module.exports = {
  mode: isDev ? "development" : "production",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    libraryTarget: "umd"
  },
  resolve: {
    alias: {
      "../../theme.config$": path.join(
        __dirname,
        "/src/styling/theme.config.less"
      )
    },
    extensions: [".ts", ".js"],
    modules: ["node_modules"]
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [...cssLoaders, "less-loader"]
      },
      {
        test: /\.css$/,
        use: cssLoaders
      },
      {
        test: /\.ts$/i,
        exclude: [/node_modules/],
        loader: "ts-loader"
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: "elm-webpack-loader",
          options: { debug: isDev }
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
        use: "file-loader?name=[name].[ext]?[hash]"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/fontwoff"
      }
    ]
  }
};
