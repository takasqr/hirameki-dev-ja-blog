// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import dayjs from 'dayjs';
import DatePicker from './DatePicker.vue';

type DatePickerProps = InstanceType<typeof DatePicker>['$props']

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: DatePickerProps) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { DatePicker },
    template: '<DatePicker :disabledDates=["2024-05-10"] :classes="classes"></DatePicker>',
  }),
  args: {
    classes: {
      text: {
        color: 'text-onSurface dark:text-onSurface-dark'
      },
    }
  }
};

export const Range: Story = {
  render: (args: DatePickerProps) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { DatePicker },
    template: '<DatePicker :disabledDates=["2024-05-10"] :classes="classes" :min="min" :max="max"></DatePicker>',
  }),
  args: {
    min: dayjs().add(-3, 'day').toDate(),
    max: dayjs().add(1, 'day').toDate(),
    classes: {
      text: {
        color: 'text-onSurface dark:text-onSurface-dark'
      },
    }
  }
};

export const OldMonth: Story = {
  render: (args: DatePickerProps) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { DatePicker },
    template: '<DatePicker :disabledDates=["2024-05-10"] :classes="classes" :year="year" :month="month"></DatePicker>',
  }),
  args: {
    year: 2000,
    month: 1,
    classes: {
      text: {
        color: 'text-onSurface dark:text-onSurface-dark'
      },
    }
  }
};