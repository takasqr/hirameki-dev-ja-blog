// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import { LoadingStore } from './LoadingStore';
import Loading from './Loading.vue';

const meta: Meta<typeof Loading> = {
  component: Loading,
};

export default meta;
type Story = StoryObj<typeof Loading>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    setup() {
      const dialogStore = LoadingStore()
      dialogStore.open({ title: 'Loading', contentText: 'しばらくお待ちください', persistent: true })
    },
    components: { Loading },
    template: '<Loading></Loading>',
  }),
};
