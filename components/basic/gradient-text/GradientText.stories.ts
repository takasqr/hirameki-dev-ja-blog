// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import GradientText from './GradientText.vue';

const meta: Meta<typeof GradientText> = {
  component: GradientText,
};

export default meta;
type Story = StoryObj<typeof GradientText>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { GradientText },
    template: '<GradientText>GradientText</GradientText>',
  }),
};