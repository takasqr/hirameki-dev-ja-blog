// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import Banner from './Banner.vue';
import { BannerStore } from './BannerStore';


const meta: Meta<typeof Banner> = {
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    setup() {
      const bannerStore = BannerStore()
      bannerStore.open({ title: 'セール', contentText: '初回５０パーセントオフキャンペーン実施中！！'})
    },
    components: { Banner },
    template: '<Banner></Banner>',
  }),
};