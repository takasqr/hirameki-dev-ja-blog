<template>
  <Card>
    <!-- <h3 class="text-base font-semibold leading-6 text-gray-900">{{ title }}</h3>
    <div class="mt-2 max-w-xl text-sm text-gray-500">
      <slot />
    </div>
    <div class="mt-5">
      <slot name="actionArea" />
    </div>  -->
    
    <!-- <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> -->

      <!-- <div class="relative flex items-center space-x-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
        </div>
        <div class="min-w-0 flex-1">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
            <p class="truncate text-sm text-gray-500">{{ person.role }}</p>
          </a>
        </div>
      </div> -->

      <div class="relative flex items-center space-x-3 bg-white">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
        </div>
        <div class="min-w-0 flex-1">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
            <p class="truncate text-sm text-gray-500">{{ person.role }}</p>
          </a>
        </div>
        <div class="flex-shrink-0">
          <!-- <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" /> -->
          <!-- <Menu>
            <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
          </Menu> -->
        </div>
      </div>
    <!-- </div> -->
  </Card>
</template>

<script setup lang="ts">
import Card from '../../basic/card/Card.vue';
import Menu from '../../basic/menu/Menu.vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

interface Props {
  title: string
}

const props = defineProps<Props>()

// 複数のスロットを扱うには名前付きスロットを使う
// https://ja.vuejs.org/guide/components/slots.html#named-slots

const person = 
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }

</script>