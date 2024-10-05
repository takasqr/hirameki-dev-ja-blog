// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Tooltip from './Tooltip.vue';
import Button from '../button/Button.vue'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

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
    components: { Tooltip, Button },
    template: '<Tooltip hoverText="ホバー" reactiveText="text" :isReact="isReact"><Button>T</Button></Tooltip>',
  }),
  args: {
    isReact: false
  },
};
