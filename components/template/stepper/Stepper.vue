<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Step :steps="steps"/>

  <template v-for="stepContent in steps">
    <template v-if="currentStep === stepContent.number">
      <slot :name="stepContent.number" />
    </template>
  </template>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from 'vue';
import Step from '../../basic/step/Step.vue'
import type { StepContent } from '../../basic/step/StepContent';
import type { StepStatus } from '../../basic/step/StepStatus';

const props = defineProps({
  stepCount: {
    type: Number,
    required: true
  },
  currentStep: {
    type: Number,
    required: true
  }
})

const steps = ref<StepContent[]>([])

init()

// 初期化
function init() {
  for (let i = 1; i <= props.stepCount; i++) {

    // 一番初めは Current にする
    const status: StepStatus = i === 1 ? 'Current' : 'Upcoming' 
    const stepContent: StepContent = { number: i, status: status }

    steps.value.push(stepContent)
  }
}

// currentStep の変更を監視
watch(
  () => props.currentStep, (newValue) => {

    // newValue を Current に変更する
    steps.value[newValue - 1].status = 'Current'

    // Current より後は Upcoming に変更する
    for (let i = newValue; i < props.stepCount; i++) {
      steps.value[i].status = 'Upcoming'
    }

    // Current より前は Complete に変更する
    for (let i = 0; i < (newValue - 1); i++) {
      steps.value[i].status = 'Complete'
    }
  }
)
</script>