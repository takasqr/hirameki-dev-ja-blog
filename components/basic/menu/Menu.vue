<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Popover class="relative">
    <PopoverButton
      :class="[
        mergedClasses.title?.layout,
        mergedClasses.title?.text?.color,
        mergedClasses.title?.text?.size,
        mergedClasses.title?.text?.layout,
        mergedClasses.title?.text?.base
      ]">
      <slot />
    </PopoverButton>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <PopoverPanel
        :class="[
          menuClass,
          mergedClasses.content?.base,
          mergedClasses.content?.layout,
          mergedClasses.content?.rounded,
          mergedClasses.content?.backgroundColor,
          mergedClasses.content?.text?.color,
          mergedClasses.content?.text?.size,
          mergedClasses.content?.text?.layout,
          mergedClasses.content?.text?.base
        ]"
      >
        <div v-for="item in items" :key="item.name">
          <p v-if="item.onClick" class="block p-2 hover:text-indigo-600" @click="clickItem(item.onClick)">{{ item.name }}</p>
          <a v-else :href="item.href" class="block p-2 hover:text-indigo-600">{{ item.name }}</a>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import type { PropType } from 'vue';
import type { MenuOption } from './MenuOption';
import type { ClassObject } from '../../types/ClassObject';
import { deepMergeClassObject } from '../../util';

const props = defineProps({
  items: {
    type: Array as PropType<MenuOption[]>,
    required: true
  },
  menuClass: {
    type: String as PropType<string>,
    default: ''
  },
  classes: {
    type: Object as PropType<ClassObject>,
  }
});

const defaultClasses: ClassObject = {
  title: {
    text: {
      base: 'font-semibold',
      color: 'text-gray-900',
      size: 'text-sm',
      layout: 'leading-6'
    },
    layout: 'inline-flex items-center gap-x-1'
  },
  content: {
    text: {
      base: 'font-semibold',
      color: 'text-gray-900',
      size: 'text-sm',
      layout: 'leading-6'
    },
    layout: 'absolute',
    rounded: 'rounded-xl',
    backgroundColor: 'bg-white',
    base: 'z-10 mt-1 w-56 shrink p-4 shadow-lg ring-1 ring-gray-900/5 top-full'
  }
}

// props.classesが渡されていない場合、defaultClassesを使用する
const mergedClasses = props.classes ? deepMergeClassObject(defaultClasses, props.classes) : defaultClasses;

function clickItem(func?: () => void) {

  if (func !== undefined) {
    func()
  }
}

</script>
