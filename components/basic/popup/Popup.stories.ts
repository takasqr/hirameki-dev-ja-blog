// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import { PopupStore } from './PopupStore';
import Popup from './Popup.vue';

const meta: Meta<typeof Popup> = {
  component: Popup,
};

export default meta;
type Story = StoryObj<typeof Popup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    setup() {
      const popupStore = PopupStore()
      popupStore.open({ persistent: true })
    },
    components: { Popup },
    template: '<Popup><p>こんにちわ</p></Popup>',
  }),
};
