// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Divider from './Divider.vue';

const meta: Meta<typeof Divider> = {
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: any) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { Divider },
    template: '<Divider :classes="classes">または</Divider>',
  }),
  args: {
    classes: {
      text: {
        color: 'text-onSurface dark:text-onSurface-dark',
        backgroundColor: 'bg-surface dark:bg-surface-dark'
      },
      content: {
        border: 'border-t border-outline dark:border-outline-dark'
      }
    }
  }
};