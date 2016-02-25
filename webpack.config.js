const webpack         = require('webpack'),
	    path              = require('path'),
	    openBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	context: path.join(__dirname, "./client"),
	entry: {
		jsx: './index.jsx',
		html: './index.html',
		vendor: ['react']
	},
	output: {
		path: path.join(__dirname, './static'),
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'client'),
				exclude: /node_modules/,
				loader: 'eslint-loader'
			}
		],
		loaders: [
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: [
					'react-hot',
					'babel-loader'
				]
			},
			{
				test: /\.less$/,
				loader: "style!css!less"
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
				]
			},
			{
				test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=200000'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
		}),
		new openBrowserPlugin({ url: 'http://localhost:3000' })
	],
	devServer: {
		contentBase: './client',
		hot: true
	},
	eslint: {
		configFile: '.eslintrc'
	}
}
