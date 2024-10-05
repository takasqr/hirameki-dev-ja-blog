// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
import CopySolidIcon from '../../icon/copy/CopySolidIcon.vue'

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

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
    components: { Button },
    template: `
      <div><Button :classes="classes">OK</Button></div>
      <div><Button :classes="classes" href="/">OK</Button></div>
    `,
  }),
  args: {
    classes: {
      color: 'text-onSurface dark:text-onSurface-dark',
      backgroundColor: '',
      border: 'border border-outline-100 dark:border-outline-dark'
    }
  }
};

export const Block: Story = {
  render: () => ({
    components: { Button },
    template: '<Button block>OK</Button>',
  }),
};

export const Icon: Story = {
  render: () => ({
    components: { Button, CopySolidIcon },
    template: '<Button class="text-gray-600"><CopySolidIcon></CopySolidIcon></Button>',
  }),
};

export const Size: Story = {
  render: () => ({
    components: { Button, CopySolidIcon },
    template: `
      <div><Button size="xs">xs</Button></div>
      <div><Button size="sm">sm</Button></div>
      <div><Button>OK</Button></div>
      <div><Button size="lg">lg</Button></div>
      <div><Button size="2xl">2xl</Button></div>
      <div><Button size="3xl">3xl</Button></div>
      <div><Button size="6xl">6xl</Button></div>
    `,
  }),
};