<template>
  <slot />

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div>
      <TextArea
       :value="modelValue"
       :rows="8"
       @input="convert"
       :placeholder="placeholderInput"
      ></TextArea>
    </div>

    <div>
      <Card style="height: 224px;">
        <div class="px-4 py-4">
          <div style="height: 192px;" class="overflow-auto relative">
            <span style="white-space: pre-line;" class="absolute left-0 top-0 leading-6">{{ resultText }}</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, type PropType } from 'vue'
import TextArea from '../../basic/text-area/TextArea.vue';
import Card from '../../basic/card/Card.vue'

const resultText = ref('')

// emit を定義
const emit = defineEmits<{
  (e: 'convert', value: string): void,
  (e: 'update:modelValue', value: string): void
}>()

const props = defineProps({
  func: {
    type: Function as PropType<(inputText: string) => string>,
    required: true
  },
  placeholderInput: {
    type: String,
  },
  placeholderResult: {
    type: String
  },
  modelValue: {
    type: String
  }
})

// 初期化
if (props.modelValue) {
  // props に入力値が入ってきたら
  resultText.value = props.func(props.modelValue)

  emit('convert', resultText.value)

} else if (props.placeholderResult) {
  // 結果エリアのプレースホルダーを初回設定
  resultText.value = props.placeholderResult
}

// props の`func`が変更されたときに実行する
watch(() => props.func, (newFunction) => {

  // 再計算
  if (newFunction instanceof Function) {
    if (props.modelValue) {
      resultText.value = newFunction(props.modelValue)

      // イベントを発火
      emit('convert', resultText.value)
    }

    console.log(props.modelValue)
    console.log(props.placeholderResult)

    // 入力がクリアされて、かつ結果プレースホルダーが設定されていたら
    if (props.modelValue?.length === 0 && props.placeholderResult) {
      resultText.value = props.placeholderResult
    }
  }  
}, { deep: true, immediate: false });

function convert(event: Event) {

  const target = event.target as HTMLInputElement

  if (target) {
    resultText.value = props.func(target.value)

    console.log(target.value)
    emit('convert', resultText.value)
    emit('update:modelValue', target.value)

    // 入力がクリアされて、かつ結果プレースホルダーが設定されていたら
    if (target.value.length === 0 && props.placeholderResult) {
      resultText.value = props.placeholderResult
    }
  }
}
</script>