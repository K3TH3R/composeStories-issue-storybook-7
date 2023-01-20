/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
		'vue/setup-compiler-macros': true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest',
	},
	plugins: ['prettier'],
	extends: [
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier',
		'plugin:storybook/recommended',
		'plugin:vue/vue3-strongly-recommended',
		'prettier',
	],

	rules: {
		'no-unused-vars': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': 'error',

		// code style
		'object-curly-newline': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'prefer-arrow-callback': 'error',
		'storybook/default-exports': 'off',

		// Vue
		'vue/multi-word-component-names': 'off',

		// Typescript
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unused-vars': [
			'off',
			{
				argsIgnorePattern: '^_',
			},
		],
	},
}
