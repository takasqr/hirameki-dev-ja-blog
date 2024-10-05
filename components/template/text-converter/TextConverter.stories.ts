// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import TextConverter from './TextConverter.vue';

const meta: Meta<typeof TextConverter> = {
  component: TextConverter,
};

export default meta;
type Story = StoryObj<typeof TextConverter>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: any) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { TextConverter },
    template: '<TextConverter :func="convert" @convert="(value) => console.log(value)"></TextConverter>',
  }),
  args: {
    // @ts-ignore
    convert: (inputText: string) => inputText + '：この入力はテストです。',
  },
};

export const WithPlaceholder: Story = {
  render: (args: any) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { TextConverter },
    template: '<TextConverter :func="convert" @convert="(value) => console.log(value)" :placeholderInput="placeholderInput" :placeholderResult="placeholderResult"></TextConverter>',
  }),
  args: {
    // @ts-ignore
    convert: (inputText: string) => inputText + '：この入力はテストです。',
    placeholderInput: '１２３ａｂｃ',
    placeholderResult: '123abc'
  },
};

export const WithValue: Story = {
  render: (args: any) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { TextConverter },
    template: '<TextConverter v-model="modelValue" :func="convert" @convert="(value) => console.log(value)" :placeholderInput="placeholderInput" :placeholderResult="placeholderResult"></TextConverter>',
  }),
  args: {
    // @ts-ignore
    convert: (inputText: string) => inputText + '：この入力はテストです。',
    placeholderInput: '１２３ａｂｃ',
    placeholderResult: '123abc',
    modelValue: '１'
  },
};