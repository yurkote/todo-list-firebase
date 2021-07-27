const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const dotenv = require("dotenv");
const webpack = require('webpack');

// //call dotenv and it will return an Object with a parsed key 
// const env = dotenv.config().parsed;

// //reduce it to a nice object, the same as before
// const envKeys = Object.keys(env).reduce((prev, next) => {
// prev[`process.env.${next}`] = JSON.stringify(env[next]);
// return prev;
// }, {});

let conf = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    publicPath: "/dist/",
  },
  devServer: {
    overlay: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.((c|sa|sc)ss)$/i,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.module.(s(a|c)ss)$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
                localIdentName: "[local]__[sha1:hash:hex:7]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    })
    // new webpack.DefinePlugin(envKeys)
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: "initial",
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: "initial",
          reuseExistingChunk: true,
        },
      },
    },
  },
};

module.exports = (env, options) => {


  let isProd = options.mode === "production";

  conf.devtool = isProd ? false : "eval-cheap-module-source-map";
  conf.target = isProd ? "browserslist" : "web"; // настройка для того, чтобы не ломалася devserver, IE - не работает в dev режиме, только в build.
  // альтернативный вариант поставить webpack-dev-server 4 версии (beta)

  return conf;
};
