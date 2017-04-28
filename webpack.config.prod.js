const { resolve } = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const builddir = 'build';
module.exports = {
    entry: {
      bundle: resolve(__dirname, "src/App.js"),
      vendor: ['react','redux','redux-thunk', 'react-router','redux-immutable-state-invariant']
    },
  output: {
    path: resolve(__dirname, builddir),
    filename: 'js/[name].js',
    publicPath:'./'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react']
      }
    },{
      test: /\.json$/,
      exclude: /node_modules/,
      loaders: 'json-loader'
    },{
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style-loader'
    },{
      test: /\.css$/,
      loader: [ 'style-loader', 'css-loader' ]
    },{
      test: /\.html$/,
      loader: 'html-loader'
    },{
      test: /\.(eot|svg|ttf|woff|woff2|gif|jpg|png)$/i,

      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
      }
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename:'styles/styles.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title:'React Starter',
      minify:{
        collapseWhitespace:true
      },
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    })
  ]
};
