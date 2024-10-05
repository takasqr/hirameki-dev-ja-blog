// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import CopyButton from './CopyButton.vue';

const meta: Meta<typeof CopyButton> = {
  component: CopyButton,
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

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
    components: { CopyButton },
    template: '<div class="text-center w-full"><CopyButton :text="text"></CopyButton></div>',
  }),
  args: {
    text: 'コピー用テキスト'
  }
};
