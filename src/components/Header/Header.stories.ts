import type { Meta, StoryObj } from '@storybook/vue3'
import MyHeader from './Header.vue'

type Story = StoryObj<typeof MyHeader>
type StoryMeta = Meta<typeof MyHeader>

export default {
	title: 'Components/Header',
	component: MyHeader,
	render: (args) => ({
		// Components used in your story `template` are defined in the `components` object
		components: { MyHeader },
		// The story's `args` need to be mapped into the template through the `setup()` method
		setup() {
			// Story args can be spread into the returned object
			return { ...args }
		},
		// Then, the spread values can be accessed directly in the template
		template: '<my-header :user="user" />',
	}),
} as StoryMeta

export const LoggedIn: Story = {
	args: {
		user: {},
	},
}

export const LoggedOut: Story = {
	args: { user: undefined },
}
