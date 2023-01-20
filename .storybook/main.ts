import type { StorybookConfigVite } from '@storybook/builder-vite'

export default {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts)'],
	docs: { autodocs: 'tag' },
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	framework: {
		name: '@storybook/vue3-vite',
		options: {},
	},
} as StorybookConfigVite
