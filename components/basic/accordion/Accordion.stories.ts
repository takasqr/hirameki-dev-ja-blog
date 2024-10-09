// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import Accordion from './Accordion.vue';

type AccordionProps = InstanceType<typeof Accordion>['$props'];

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: AccordionProps) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { Accordion },
    template: '<Accordion :contents="contents" :classes="classes"></Accordion>',
  }),
  args: {
    contents: [
      {
         title: "What's the best thing about Switzerland?",
         body: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      }
    ],
    classes: {
      title: {
        text: {
          color: 'text-onSurface dark:text-onSurface-dark'
        }
      },
      content: {
        text: {
          color: 'text-onSurface dark:text-onSurface-dark'
        }
      }
    }
  }
};
