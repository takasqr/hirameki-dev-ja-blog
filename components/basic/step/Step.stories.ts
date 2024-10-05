// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Step from './Step.vue';
import { type StepContent } from './StepContent'

const meta: Meta<typeof Step> = {
  component: Step,
};

export default meta;
type Story = StoryObj<typeof Step>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

const steps: StepContent[] = [
  { number: 1, status: 'Complete' },
  { number: 2, status: 'Complete' },
  { number: 3, status: 'Complete' },
  { number: 4, status: 'Current' },
  { number: 5, status: 'Upcoming' },
]

export const Primary: Story = {
  render: (args: any) => ({
    setup() {
      return {
        ...args,
      };
    },
    components: { Step },
    template: '<Step :steps="steps"></Step>',
  }),
  args: {
    steps: steps
  },
};