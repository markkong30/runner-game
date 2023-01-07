const path = require('path');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, './src/index.ts'),
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'public', 'static', 'bundle')
	}
};
