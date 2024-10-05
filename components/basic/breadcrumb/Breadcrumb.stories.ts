// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import Breadcrumb from './Breadcrumb.vue';


const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    setup() {
    },
    components: { Breadcrumb },
    template: '<Breadcrumb></Breadcrumb>',
  }),
};