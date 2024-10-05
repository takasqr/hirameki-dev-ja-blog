<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
    <Disclosure as="div" v-for="content in contents" :key="content.title" class="pt-6" v-slot="{ open }">
      <dt>
        <DisclosureButton
          :class="[
            mergedClasses.title?.base,
            mergedClasses.title?.layout,
            mergedClasses.title?.text?.base,
            mergedClasses.title?.text?.color,
            mergedClasses.title?.text?.layout
          ]"
        >
          <span class="text-base font-semibold leading-7">{{ content.title }}</span>
          <span class="ml-6 flex h-7 items-center">
            <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
            <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
          </span>
        </DisclosureButton>
      </dt>
      <DisclosurePanel as="dd" class="mt-2 pr-12">
        <p
          :class="[
            mergedClasses.content?.base,
            mergedClasses.content?.layout,
            mergedClasses.content?.text?.size,
            mergedClasses.content?.text?.color
          ]"
        >{{ content.body }}</p>
      </DisclosurePanel>
    </Disclosure>
  </dl>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
import type { AccordionContent } from './AccordionContent';
import type { ClassObject } from '../../types/ClassObject';

const props = defineProps({
  contents: {
    type: Array as PropType<AccordionContent[]>,
    required: true
  },
  classes: {
    type: Object as PropType<ClassObject>,
  }
})

const defaultClasses: ClassObject = {
  title: {
    base: '',
    layout: 'flex w-full items-start justify-between',
    text: {
      base: '',
      color: 'text-gray-900',
      layout: 'text-left'
    }
  },
  content: {
    base: '',
    layout: 'leading-7',
    text: {
      size: 'text-base',
      color: 'text-gray-600'
    }
  }
}

// 深くマージする関数
function deepMerge(target: ClassObject, source: ClassObject): ClassObject {
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      target[key] = deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// props.classesが渡されていない場合、defaultClassesを使用する
const mergedClasses = props.classes ? deepMerge(defaultClasses, props.classes) : defaultClasses;
</script>