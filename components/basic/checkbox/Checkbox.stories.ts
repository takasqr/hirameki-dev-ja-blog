// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from './Checkbox.vue';

type CheckboxProps = InstanceType<typeof Checkbox>['$props']

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { Checkbox },
    template: '<Checkbox></Checkbox>',
  }),
};

export const WithTitle: Story = {
  render: (args: CheckboxProps) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { Checkbox },
    template: '<Checkbox title="利用規約に同意" :classes="classes"></Checkbox>',
  }),
  args: {
    title: 'ダッシュボード',
    classes: {
      text: {
        color: 'text-onSurface dark:text-onSurface-dark'
      },
    }
  }
};

export const WithSlot: Story = {
  render: () => ({
    components: { Checkbox },
    template: '<Checkbox><p id="comments-description" class="text-gray-500">Get notified when someones posts a comment on a posting.</p></Checkbox>',
  }),
};