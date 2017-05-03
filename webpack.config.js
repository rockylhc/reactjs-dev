const { resolve } = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const modernizrOptions = {
  'feature-detects': [
    "input",
    "inputtypes",
  ]
};

module.exports = {
  entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8888',
		'webpack/hot/only-dev-server',
		'./App.js'
  ],
  output: {
    path: resolve(__dirname, "src"),
    filename: 'js/bundle.js',
	publicPath: '/'
  },
  context: resolve(__dirname, 'src'),
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
    },{
      loader: 'webpack-modernizr-loader',
      options: modernizrOptions,
      test: /\.modernizrrc$/,
      exclude: /node_modules/
    }]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
		  title:'React',
		  inject: true,
		  template: resolve(__dirname, 'src/index.html'),
      }),
      new ExtractTextPlugin({
	    filename:'styles/styles.css',
        allChunks: true
	  }),
	  new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modernizr$: resolve(__dirname, ".modernizrrc")
    }
  },
  devtool: 'source-map',
  devServer: {
    port:8888,
    historyApiFallback: true,
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};
