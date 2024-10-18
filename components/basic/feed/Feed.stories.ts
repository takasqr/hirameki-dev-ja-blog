// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/vue/20/solid'
import Feed from './Feed.vue';

type FeedProps = InstanceType<typeof Feed>['$props']

const meta: Meta<typeof Feed> = {
  component: Feed,
};

export default meta;
type Story = StoryObj<typeof Feed>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: FeedProps) => ({
    setup() {
      return {
        ...args,
      };
    },
    components: { Feed, CheckIcon, HandThumbUpIcon, UserIcon },
    template: '<Feed :timeline="timeline"></Feed>',
  }),
  args: {
    timeline: [
      {
        id: 1,
        content: 'Applied to',
        date: '2020-09-20',
        icon: UserIcon,
        iconBackground: 'bg-gray-400',
      },
      {
        id: 2,
        content: 'Advanced to phone screening by',
        date: '2020-09-22',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-blue-500',
      },
      {
        id: 3,
        content: 'Completed phone screening with',
        date: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      },
      {
        id: 4,
        content: 'Advanced to interview by',
        date: '2020-09-30',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-blue-500',
      },
    ]
  },
};