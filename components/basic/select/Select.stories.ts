// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, watchEffect } from "vue"
import Select from './Select.vue';
import type { SelectOption } from './SelectOption';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const selectOption: SelectOption[] = [
  { key: 'milk', name: 'ミルク' },
  { key: 'orange', name: 'オレンジジュース' },
  { key: 'coffee', name: 'コーヒー' }
]

const selected: SelectOption = { key: 'coffee', name: 'コーヒー' }

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
 export const Primary: Story = {
  render: (args: any) => ({
    setup() {
      // `selected`を直接使うのではなく、`modelValue`を経由して初期値を設定
      const modelValue = ref(args.modelValue);
      
      // `update:modelValue`イベントをリッスンして、内部状態を更新
      watchEffect(() => {
        modelValue.value = args.modelValue;
      });

      return {
        ...args,
        modelValue,
        updateModelValue: (newValue: SelectOption) => {
          modelValue.value = newValue;
        },
      };
    },
    components: { Select },
    template: '<Select :options="options" :title="title" v-model="modelValue"></Select>',
  }),
  args: {
    title: '飲み物',
    options: selectOption,
    modelValue: selected, // `selected`ではなく、`modelValue`として指定
  },
};