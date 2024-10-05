// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import TextArea from './TextArea.vue';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

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
    components: { TextArea },
    template: `
      <div class="mb-2"><TextArea size="xs" :classes="classes"></TextArea></div>
      <div class="mb-2"><TextArea size="sm" :classes="classes"></TextArea></div>
      <div class="mb-2"><TextArea size="base" :classes="classes"></TextArea></div>
      <div class="mb-2"><TextArea size="lg" :classes="classes"></TextArea></div>
      <div class="mb-2"><TextArea size="2xl" :classes="classes"></TextArea></div>
      <div class="mb-2"><TextArea size="3xl" :classes="classes"></TextArea></div>
      <div class="mb-2"><TextArea size="6xl" :classes="classes"></TextArea></div>
    `,
  }),
  args: {
    classes: {
      content: {
        input: {
          color: 'text-onSurface dark:text-onSurface-dark'
        }
      }
    }
  }
};