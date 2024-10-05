// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Card from './Card.vue';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

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
    components: { Card },
    template: `
      <Card :classes="classes">
        <p class="text-onSurface dark:text-onSurface-dark">Card</p>
      </Card>
    `,
  }),
  args: {
    classes: { base: 'py-4 px-4 bg-surfaceContainerLow dark:bg-surfaceContainerLow-dark border border-solid border-outline dark:border-outline-dark rounded-lg' }
  }
};