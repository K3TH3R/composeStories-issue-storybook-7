import type { Meta, StoryObj } from '@storybook/vue3'
import BasicButton from './BasicButton.vue'

type Story = StoryObj<typeof BasicButton>
type StoryMeta = Meta<typeof BasicButton>

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
	title: 'Components/Basic Button',
	component: BasicButton,
	render: (args) => ({
		// Components used in your story `template` are defined in the `components` object
		components: { BasicButton },
		// The story's `args` need to be mapped into the template through the `setup()` method
		setup() {
			return { args }
		},
		// And then the `args` are bound to your component with `v-bind="args"`
		template: '<basic-button v-bind="args" />',
	}),
} as StoryMeta

export const Primary: Story = {
	// More on args: https://storybook.js.org/docs/vue/writing-stories/args
	args: {
		primary: true,
		size: 'medium',
		label: 'Button',
	},
}

export const Secondary: Story = {
	args: {
		label: 'Button',
		size: 'medium',
	},
}

export const Large: Story = {
	args: {
		size: 'large',
		label: 'Button',
	},
}

export const Small: Story = {
	args: {
		size: 'small',
		label: 'Button',
	},
}
