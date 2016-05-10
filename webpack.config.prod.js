var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
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
		preLoaders: [{
			include: __dirscripts,
			test: /\.(js|jsx)$/,
			loaders: ['eslint']
		}],
		loaders: [{
			include: __dirscripts,
			test: /\.jsx?$/,
			loaders: ['babel']
		}, {
			test: /\.(css|scss)$/,
			loaders: ['style', 'css?sourceMap&minimize', 'postcss', 'sass?sourceMap']
		}, {
			include: __dirimage,
			test: /\.(jpe?g|png|gif|svg)$/,
			loaders: [
				'url-loader?name=img/[hash].[ext]&limit=8192',
				'image-webpack-loader?bypassOnDebug=true&optimizationLevel=7'
			]
		}, {
			include: [__dirstyles, __dirnodemodules],
			test: /\.(svg|woff|woff2|[ot]tf|eot)$/,
			loader: 'url?limit=65000&mimetype=application/octet-stream&name=font/[name].[ext]'
		}]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(), // Search for equal or similar files and deduplicate them in the output.
		new webpack.optimize.CommonsChunkPlugin('js/vendor', 'js/vendor.bundle.js'),
		new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      compress: {
      	warnings: false
      }
    }),
    new CopyWebpackPlugin([{
    	from: path.resolve(__dirapp, 'index.html')
    }])
	],
  postcss: function() {
    return [autoprefixer];
  },
  eslint: {
    configFile: './.eslintrc'
  }
};

console.log('process.env.NODE_ENV:', process.env.NODE_ENV);