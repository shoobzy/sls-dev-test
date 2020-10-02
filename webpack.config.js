const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    Step1: path.resolve(__dirname, 'src/Step1.js'),
    Step2: path.resolve(__dirname, 'src/Step2.js'),
    Step3: path.resolve(__dirname, 'src/Step3.js'),
    Step4: path.resolve(__dirname, 'src/Step4.js'),
    Success: path.resolve(__dirname, 'src/Success.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: env === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
    publicPath: '/',
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
    port: 9000,
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
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
    new FaviconsWebpackPlugin("./public/images/favicon.png"), // svg works too!
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
  ]
};
