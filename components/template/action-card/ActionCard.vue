<template>
  <Card>
    <h3 class="text-base font-semibold leading-6 text-gray-900">{{ title }}</h3>
    <div class="mt-2 max-w-xl text-sm text-gray-500">
      <slot />
    </div>
    <div class="mt-5">
      <slot name="actionArea" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '../../basic/card/Card.vue';

interface Props {
  title: string
}

const props = defineProps<Props>()

// 複数のスロットを扱うには名前付きスロットを使う
// https://ja.vuejs.org/guide/components/slots.html#named-slots
</script>