<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <fieldset>
    <legend class="sr-only">Notifications</legend>
    <div class="space-y-5">
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" >
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="comments" class="font-medium" :class="[mergedClasses.text?.color]">{{ title }}</label>
          <slot />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { deepMergeClassObject } from '../../util';
import type { ClassObject } from '../../types/ClassObject';
import { defineProps, type PropType } from 'vue';

const props = defineProps({
  title: {
    type: String as PropType<string>,
    required: true
  },
  classes: {
    type: Object as PropType<ClassObject>,
  }
})

const defaultClasses: ClassObject = {
  text: {
    color: 'text-gray-900'
  }
}

// props.classesが渡されていない場合、defaultClassesを使用する
const mergedClasses = props.classes ? deepMergeClassObject(defaultClasses, props.classes) : defaultClasses;
</script>