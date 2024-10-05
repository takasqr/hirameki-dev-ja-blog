<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
   v-if="!href"
    :disabled="disabled"
    :class="[
      mergedClasses.base,
      mergedClasses.border,
      mergedClasses.rounded,
      mergedClasses.spacing,
      mergedClasses.color,
      mergedClasses.backgroundColor,
      mergedClasses.size,
      textSize,
      { 'w-full': block, 'opacity-30': disabled }
    ]"
  >
    <slot></slot>
  </button>

  <a
   v-else
    :href="href"
    :class="[
      mergedClasses.base,
      mergedClasses.border,
      mergedClasses.rounded,
      mergedClasses.spacing,
      mergedClasses.color,
      mergedClasses.size,
      mergedClasses.backgroundColor,
      textSize,
      { 'w-full text-center': block }
    ]"
    class="inline-block"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { defineProps, ref, type PropType } from 'vue';
import { buttonSizes } from './ButtonSize'
import type { ClassObject } from '../../types/ClassObject';
import { deepMergeClassObject } from '../../util';

const props = defineProps({
  block: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'base',
    validator: (value: any): boolean => buttonSizes.includes(value)
  },
  classes: {
    type: Object as PropType<ClassObject>,
  }
})

const defaultClasses: ClassObject = {
  base: 'font-bold',
  spacing: 'py-2 px-4',
  backgroundColor: 'bg-white',
  rounded: 'rounded-full',
  color: 'hover:bg-gray-50',
  border: 'border border-gray-200',
  size: '',
}

// props.classesが渡されていない場合、defaultClassesを使用する
const mergedClasses = props.classes ? deepMergeClassObject(defaultClasses, props.classes) : defaultClasses;

const textSize = ref('text-' + props.size)
</script>