<template>
  <div>
    <div v-if="!props.isCompleted">
      <div v-if="showSpinner">
        <div class="animate-spin h-8 w-8 border-4 border-gray-500 rounded-full border-t-transparent" />
      </div>

      <div v-else @click="spin()">
        <div class="h-8 w-8 border-4 border-gray-500 rounded-full" />
      </div>
    </div>

    <div v-else>
      <CheckDuotoneIcon class="text-gray-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CheckDuotoneIcon from '../../icon/task/CheckDuotoneIcon.vue'

const props = defineProps({
  isCompleted: {
    type: Boolean as PropType<string>,
    default: false
  }
})

const emit = defineEmits<{
  complete: []
}>()

const showSpinner = ref(false)

function spin() {
  showSpinner.value = true

  emit('complete')

  // isCompleted.value = true
}
</script>