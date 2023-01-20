import * as stories from './BasicButton.stories.js'
import { composeStories } from '@storybook/testing-vue3'
// @ts-expect-error - there's an issue with the types of composeStories
const composed = composeStories(stories)

describe(`BasicButton.vue`, () => {
	it(`should be true`, async () => {
		expect(true).toBe(true)
	})
})
