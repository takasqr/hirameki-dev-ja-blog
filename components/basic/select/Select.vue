<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Listbox v-model="selected" as="div">
    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">{{ title }}</ListboxLabel>
    <div class="relative mt-2">
      <ListboxButton class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <span class="block truncate">{{ selected.name }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption v-for="option in props.options" :key="option.key" v-slot="{ active, selected }" as="template" :value="option">
            <li :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-8 pr-4']">
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ option.name }}</span>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect, defineProps, defineEmits, type PropType } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import type { SelectOption } from './SelectOption';


const props = defineProps({
  title: String,
  options: {
    type: Array as PropType<SelectOption[]>,
    required: true
  },
  modelValue: Object as PropType<SelectOption>
})

const emits = defineEmits(['update:modelValue'])

const selected = ref<SelectOption>(props.modelValue || props.options[0])

watchEffect(() => {
  if (props.modelValue) {
    selected.value = props.modelValue
  }
})

watch(selected, (newValue) => {
  emits('update:modelValue', newValue)
})
</script>