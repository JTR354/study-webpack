const path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.join(__dirname, 'dist')
	},
	devtool: 'source-map',
	target: 'node',
	module: {
		rules: [{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }]
	}
};
