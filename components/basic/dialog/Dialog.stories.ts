// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import { DialogStore } from './DialogStore';
import Dialog from './Dialog.vue';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    setup() {
      const dialogStore = DialogStore()
      dialogStore.open({ title: 'セール', contentText: '初回５０パーセントオフキャンペーン実施中！！', persistent: true })
    },
    components: { Dialog },
    template: '<Dialog></Dialog>',
  }),
};

export const WithCancelButton: Story = {
  render: () => ({
    setup() {
      const dialogStore = DialogStore()
      dialogStore.open({ title: 'セール', contentText: '初回５０パーセントオフキャンペーン実施中！！', cancelButtonText: 'キャンセル', persistent: true })
    },
    components: { Dialog },
    template: '<Dialog></Dialog>',
  }),
};