// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import ArrayEditor from './ArrayEditor.vue';

type ArrayEditorProps = InstanceType<typeof ArrayEditor>['$props']

const meta: Meta<typeof ArrayEditor> = {
  component: ArrayEditor,
};

export default meta;
type Story = StoryObj<typeof ArrayEditor>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: ArrayEditorProps) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { ArrayEditor },
    template: '<ArrayEditor :data="cell" @shuffle="console.log(`shuffle`)" @input="(value) => console.log(`input`, value)"></ArrayEditor>',
  }),
  args: {
    // @ts-ignore
    cell: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  }
};