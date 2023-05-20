module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'prettier/prettier': 'error',
		'no-case-declarations': 'off',
		'no-constant-condition': 'off'
	}
};
