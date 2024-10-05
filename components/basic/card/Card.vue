<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :class="classes.base">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { ClassObject } from '../../types/ClassObject';
import { defineProps, type PropType } from 'vue';

defineProps({
  classes: {
    type: Object as PropType<ClassObject>,
    default() {
      return {
        base: 'bg-white border border-solid border-gray-300 rounded-lg'
      }
    }
  }
})
</script>