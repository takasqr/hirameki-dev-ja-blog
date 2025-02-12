<template>
  <Card class="p-2">
    <div class="relative flex items-center space-x-3 bg-white">
      <div class="flex justify-center">
        <TaskSpinner />
      </div>

      <div class="min-w-0 flex-1">
        <a href="#" class="focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-900">{{ props.title }}</p>
          <p class="truncate text-sm text-gray-500">{{ props.description }}</p>
        </a>
      </div>
      <div class="flex-shrink-0">
        <!-- <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" /> -->
        <!-- <Menu>
          <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
        </Menu> -->
        <!-- <p>⭐️</p> -->
        <slot name="trailing" />
      </div>
      </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '../../basic/card/Card.vue';
import TaskSpinner from '../task-spinner/TaskSpinner.vue'

interface Props {
  title: string,
  description: string
}

const props = defineProps<Props>()

// 複数のスロットを扱うには名前付きスロットを使う
// https://ja.vuejs.org/guide/components/slots.html#named-slots



</script>