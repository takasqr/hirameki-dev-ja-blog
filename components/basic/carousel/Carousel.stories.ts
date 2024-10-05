// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Carousel from './Carousel.vue';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { Carousel },
    template: `
      <Carousel>
        <img src="/carousel-0.webp" alt="Slide 1">
        <img src="/carousel-1.webp" alt="Slide 2">
        <img src="/carousel-2.webp" alt="Slide 3">
      </Carousel>
    `,
  }),
};