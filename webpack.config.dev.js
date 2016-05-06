var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

var __dirbuild = path.resolve(__dirname, 'dist');
var __dirnodemodules = path.resolve(__dirname, 'node_modules');
var __dirapp = path.resolve(__dirname, 'app');
var __dirscripts = path.resolve(__dirapp, 'js');
var __dirstyles = path.resolve(__dirapp, 'styles');
var __dirimage = path.resolve(__dirapp, 'img');

module.exports = {
	noInfo: true,
	entry: {
		'js/app': path.resolve(__dirscripts, 'app.jsx'),
		'js/vendor': [
			'webpack-dev-server/client?http://0.0.0.0:3000',
			'webpack/hot/only-dev-server',
			'react', 
			'react-dom'
		]
	},
	output: {
		path: __dirbuild,
		publicPath: '/',
		filename: '[name].bundle.js'
	},
	module: {
		preLoaders: [],
		loaders: [{
			include: __dirscripts,
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel']
		}, {
			test: /\.(css|scss)$/,
			loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']
		}, {
			include: __dirimage,
			test: /\.(jpe?g|png|gif|svg)$/,
			loaders: [
				'url-loader?name=img/[hash].[ext]&limit=8192',
				'image-webpack-loader?bypassOnDebug=true&optimizationLevel=7'
			]
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin('js/vendor', 'js/vendor.bundle.js'),
		new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
	],
  postcss: function() {
    return [autoprefixer];
  }
};

console.log('process.env.NODE_ENV:', process.env.NODE_ENV);