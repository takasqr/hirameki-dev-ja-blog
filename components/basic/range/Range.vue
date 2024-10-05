<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex">
    <MinusSolidIcon
      class="flex-none"
      :class="[
        mergedClasses.icon?.color
      ]"
      @click="decrement()"
    />
    <div
      class="flex-1 px-2 flex items-center"
    >
      <input
       type="range"
       class="w-full"
       :class="[
          mergedClasses.content?.base,
          mergedClasses.content?.backgroundColor,
          mergedClasses.content?.rounded,
          mergedClasses.content?.size,
        ]"
       :min="min"
       :max="max"
       :step="step"
       :value="modelValue"
       @input="inputValue"
       >
    </div>
    <PlusSolidIcon
      class="flex-none"
      :class="[
        mergedClasses.icon?.color,
      ]"
      @click="increment()"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType, ref } from 'vue'
import MinusSolidIcon from '../../icon/basic/MinusSolidIcon.vue'
import PlusSolidIcon from '../../icon/basic/PlusSolidIcon.vue'
import type { ClassObject } from '../../types/ClassObject';
import { deepMergeClassObject } from '../../util';

const props = defineProps({
  min: {
    type: Number as PropType<number>,
    default() {
      return 0
    }
  },
  max: {
    type: Number as PropType<number>,
    default() {
      return 100
    }
  },
  step: {
    type: Number as PropType<number>,
    default() {
      return 1
    }
  },
  modelValue: {
    type: Number as PropType<number>,
    default() {
      return 0
    }
  },
  classes: {
    type: Object as PropType<ClassObject>,
  }
})

const defaultClasses: ClassObject = {
  icon: {
    color: 'text-gray-500'
  },
  content: {
    base: 'appearance-none [-webkit-appearance: none]',
    backgroundColor: 'bg-gray-400',
    rounded: 'rounded-full',
    size: 'h-2'
  }
}

// props.classesが渡されていない場合、defaultClassesを使用する
const mergedClasses = props.classes ? deepMergeClassObject(defaultClasses, props.classes) : defaultClasses;

const modelValue = ref<string>(props.modelValue.toString())

const emit = defineEmits<{
  customInput: [value: Event],
  'update:modelValue': [value: number]
}>()

function increment() {
  if (Number(modelValue.value) < props.max) {
    let number = Number(modelValue.value)
    modelValue.value = (number + props.step).toString()
    emitCustomEvent(modelValue.value)
    emit('update:modelValue', Number(modelValue.value))
  }
}

function decrement() {
  if (Number(modelValue.value) > props.min) {
    let number = Number(modelValue.value)
    modelValue.value =  (number - props.step).toString()
    emitCustomEvent(modelValue.value)
    emit('update:modelValue', Number(modelValue.value))
  }
}

function inputValue(e: Event) {
  const target = e.target as HTMLInputElement | null
  
  if (target) {
    emitCustomEvent(target.value)
    modelValue.value = target.value

    emit('update:modelValue', Number(target.value))
  }
}

function emitCustomEvent(value: string) {
  const event = new CustomEvent('input', {
    detail: value
  })
  emit('customInput', event)
}
</script>