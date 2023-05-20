const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [{ test: /\.js$/, use: path.join(__dirname, 'debug-loader.js') }]
	}
};
