module.exports = {
	printWidth: 100,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
	arrowParens: 'always',
	bracketSpacing: true,
	proseWrap: 'never',

	overrides: [
		{
			files: '*.mdx',
			options: {
				useTabs: false,
			},
		},
		{
			files: ['*.yaml', '*.yml'],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}