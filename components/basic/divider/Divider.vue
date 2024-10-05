<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div
        :class="[
          mergedClasses.content?.spacing,
          mergedClasses.content?.border
        ]"
      />
    </div>
    <div class="relative flex justify-center">
      <span
        :class="[
          mergedClasses.text?.backgroundColor,
          mergedClasses.text?.spacing,
          mergedClasses.text?.size,
          mergedClasses.text?.color,
          mergedClasses.text?.rounded
        ]"
      >
        <slot />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { deepMergeClassObject } from '../../util';
import type { ClassObject } from '../../types/ClassObject';
import { defineProps, type PropType } from 'vue';

const props = defineProps({
  classes: {
    type: Object as PropType<ClassObject>,
  }
})

const defaultClasses: ClassObject = {
  content: {
    spacing: 'w-full',
    border: 'border-t border-gray-300',
  },
  text: {
    backgroundColor: 'bg-white',
    spacing: 'px-2',
    size: 'text-sm',
    color: 'text-gray-500',
    rounded: 'rounded-full'
  }
}

// props.classesが渡されていない場合、defaultClassesを使用する
const mergedClasses = props.classes ? deepMergeClassObject(defaultClasses, props.classes) : defaultClasses;

</script>