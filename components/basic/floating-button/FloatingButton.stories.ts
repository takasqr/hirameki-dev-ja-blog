// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import FloatingButton from './FloatingButton.vue';
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'

const meta: Meta<typeof FloatingButton> = {
  component: FloatingButton,
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { FloatingButton, QuestionMarkCircleIcon },
    template: '<FloatingButton><QuestionMarkCircleIcon class="h-12 w-12" aria-hidden="true" /></FloatingButton>',
  }),
};