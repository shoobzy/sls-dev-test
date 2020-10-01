const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: ['babel-loader']
    }, {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    }]
  },
  devServer: {
    contentBase:  path.resolve(__dirname, 'dist'),
    port: 9000
  },
  optimization: {
    minimize: true,
    minimizer: [
        new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    require('@tailwindcss/ui'),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html", //source html
    }),
    new FaviconsWebpackPlugin("public/images/favicon.png") // svg works too!
  ]
};
