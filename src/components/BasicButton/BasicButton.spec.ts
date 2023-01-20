import { composeStories } from '@storybook/testing-vue3'
import { render } from '@testing-library/vue'

import * as stories from './BasicButton.stories.js'

const composed = composeStories(stories)

export function testStoriesRender(composed) {
	Object.entries(composed).forEach(([key, value]) => {
		if (key === 'default') return

		it(`renders the '${key}' state properly`, async () => {
			// @ts-expect-error - value is a function
			const { container } = render(value())
			expect(container).toMatchSnapshot()
		})
	})
}

describe(`BasicButton.vue`, () => {
	testStoriesRender(composed)
})
