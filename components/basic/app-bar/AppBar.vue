<template>
  <div :class="['sticky top-0 z-40 flex items-center gap-x-6 px-4 py-4 sm:px-6 lg:pl-80', mergedClasses.border]">
    <button type="button" :class="['-m-2.5 p-2.5 lg:hidden', mergedClasses.icon?.color]" @click="open()">
      <span class="sr-only">Open sidebar</span>
      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
    </button>
    <div :class="['flex-1 text-sm font-semibold leading-6', mergedClasses.text?.color]">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import {
  Bars3Icon,
} from '@heroicons/vue/24/outline'
import type { ClassObject } from '../../types/ClassObject';
import { deepMergeClassObject } from '../../util';

const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: "Dashboard"
  },
  classes: {
    type: Object as PropType<ClassObject>,
  }
})

const defaultClasses: ClassObject = {
  text: {
    color: 'text-gray-900'
  },
  icon: {
    color: 'text-gray-700'
  },
  border: 'border-b-2 border-gray-100'
}

// props.classesが渡されていない場合、defaultClassesを使用する
const mergedClasses = props.classes ? deepMergeClassObject(defaultClasses, props.classes) : defaultClasses;

const emits = defineEmits(['open'])

function open() {
  emits('open')
}

</script>