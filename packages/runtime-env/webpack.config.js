// const webpack = require('webpack');

class EnvPlugin {
	apply(cmp) {
		cmp.hooks.environment.tap('EnvPlugin', () => {
			cmp.options.optimization.splitChunks.cacheGroups.env = {
				chunks: 'all',
				minChunks: 1,
				test: /env\.js$/,
				minSize: 1,
				name: 'env'
			};
		});
	}
}
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	target: 'node',
	plugins: [new EnvPlugin()]
	// optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			env: {
	// 				chunks: 'all',
	// 				minChunks: 1,
	// 				test: /env.js$/,
	// 				minSize: 1,
	// 				name: 'env'
	// 			}
	// 		}
	// 	}
	// }
};
