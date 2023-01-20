import type { Meta, StoryObj } from '@storybook/vue3'
import MyPage from './Page.vue'
import * as HeaderStories from '@c/Header/Header.stories'

type Story = StoryObj<typeof MyPage>
type StoryMeta = Meta<typeof MyPage>

export default {
	title: 'Example/Page',
	component: MyPage,
	render: (args) => ({
		// Components used in your story `template` are defined in the `components` object
		components: { MyPage },
		// The story's `args` need to be mapped into the template through the `setup()` method
		setup() {
			// Story args can be mapped to keys in the returned object
			return { user: args.user }
		},
		// Then, those values can be accessed directly in the template
		template: '<my-page :user="user" />',
	}),
} as StoryMeta

export const LoggedIn: Story = {
	args: { ...HeaderStories.LoggedIn.args },
}

export const LoggedOut: Story = {
	args: { ...HeaderStories.LoggedOut.args },
}
