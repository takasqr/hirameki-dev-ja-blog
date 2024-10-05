// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import HorizontalScroll from './HorizontalScroll.vue';

const meta: Meta<typeof HorizontalScroll> = {
  component: HorizontalScroll,
};

export default meta;
type Story = StoryObj<typeof HorizontalScroll>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { HorizontalScroll },
    template: `
      <HorizontalScroll>
        <img src="/carousel-0.webp" alt="Slide 1">
        <img src="/carousel-1.webp" alt="Slide 2">
        <img src="/carousel-2.webp" alt="Slide 3">
      </HorizontalScroll>
    `,
  }),
};
