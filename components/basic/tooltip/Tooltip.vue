<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <span class="relative group">
    <div @mouseenter="showTooltip" @mouseleave="hideTooltip">
      <slot />
    </div>
    <span v-show="isReact" class="absolute z-50 whitespace-nowrap -bottom-12 left-1/2 -translate-x-1/2 bg-gray-600 py-1 px-2 text-white rounded">{{ reactiveText }}</span>
    <span v-show="!isReact && isShowTooltip" class="absolute z-50 whitespace-nowrap -bottom-12 left-1/2 -translate-x-1/2 bg-gray-600 py-1 px-2 text-white rounded">{{ hoverText }}</span>
  </span>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';

const isShowTooltip = ref(false)

const props = defineProps({
  reactiveText: {
    type: String,
    default: ''
  },
  hoverText: {
    type: String,
    required: true
  },
  isReact: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['update:isReact'])

// currentStep の変更を監視
watch(
  () => props.isReact, (newValue) => {

    if (newValue === true) {
      setTimeout(() => { emit('update:isReact', false) }, 1000)
    }
  }
)

function showTooltip() {
  isShowTooltip.value = true
}

function hideTooltip() {
  isShowTooltip.value = false
}
</script>
