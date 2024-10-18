<template>
  <div class="static">
    <div class="fixed bottom-4 right-6">
      <button type="button" :class="classes.base">
        <slot />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ClassObject } from '../../types/ClassObject';

defineProps({
  classes: {
    type: Object as PropType<ClassObject>,
    default() {
      return {
        base: 'rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      }
    }
  }
})
</script>