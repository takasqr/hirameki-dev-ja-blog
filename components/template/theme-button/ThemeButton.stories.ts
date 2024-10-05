// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import ThemeButton from './ThemeButton.vue';

const meta: Meta<typeof ThemeButton> = {
  component: ThemeButton,
};

export default meta;
type Story = StoryObj<typeof ThemeButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: any) => ({
    setup() {
      return {
        ...args,
      };
    },
    components: { ThemeButton },
    template: '<div class="text-center w-full"><ThemeButton></ThemeButton></div>',
  }),
};
