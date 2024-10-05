// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import NeonSignText from './NeonSignText.vue';

const meta: Meta<typeof NeonSignText> = {
  component: NeonSignText,
};

export default meta;
type Story = StoryObj<typeof NeonSignText>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { NeonSignText },
    template: '<NeonSignText>NeonSignText</NeonSignText>',
  }),
};