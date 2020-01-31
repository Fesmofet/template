const path = require("path");
const webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var {CleanWebpackPlugin} = require("clean-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(less|css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader',
        ],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "/dist/",
    filename: "[name].[hash:8].js"
  },
  devServer: {
    port: 3033,
    index: 'index.html',
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: 'styles.[hash:8].css',
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
    
    }),
  ]
};