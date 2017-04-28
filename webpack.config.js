const { resolve } = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
	rules:[
		{
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
			loader: 'style-loader!css?sourceMap'
		},{
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    },{
			test: /\.html$/,
			loader: 'html-loader'
		},{
			test: /\.(svg|ttf|woff|eot|woff(2)?)(\?.*$|$)/,
			loader: 'url-loader?limit=100000'
		}
	]
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
