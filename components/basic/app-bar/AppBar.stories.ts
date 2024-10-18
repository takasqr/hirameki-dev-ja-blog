// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import AppBar from './AppBar.vue';

type AppBarProps = InstanceType<typeof AppBar>['$props']

const meta: Meta<typeof AppBar> = {
  component: AppBar,
};

export default meta;
type Story = StoryObj<typeof AppBar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: AppBarProps) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { AppBar },
    template: '<AppBar :title="title" :classes="classes"></AppBar>',
  }),
  args: {
    title: 'ダッシュボード',
    classes: {
      text: {
        color: 'text-onSurface dark:text-onSurface-dark'
      },
      icon: {
        color: 'text-onSurface dark:text-onSurface-dark'
      },
      border: 'border-b-2 border-outline-100 dark:border-outline-dark'
    }
  }
};