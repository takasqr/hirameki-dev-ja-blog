<template>
  <ul role="list" class="flex flex-1 flex-col gap-y-7">
    <li>
      <ul role="list" class="-mx-2 space-y-1">
        <li v-for="item in navigationItems" :key="item.name">

          <SecondaryButton v-if="item.onClick" block @click="clickNavigation(item.onClick)">
            <component :is="item.icon" :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0 inline mx-2']" aria-hidden="true" />
            {{ item.name }}
          </SecondaryButton>

          <div v-else class="flex">
            <div class="hover:bg-gray-50">
              <component
                :is="ChevronRightIcon"
                v-if="item.isOpen === false"
                :class="[
                  'text-gray-400 hover:text-indigo-600',
                  'h-6 w-6 shrink-0 inline mx-2 my-2'
                ]"
                @click="openSubItems(item)"
              />
              <component
                :is="ChevronDownIcon"
                v-if="item.isOpen === true"
                :class="[
                  'text-gray-400 hover:text-indigo-600',
                  'h-6 w-6 shrink-0 inline mx-2 my-2'
                ]"
                @click="closeSubItems(item)"
              />
            </div>

            <a
              v-if="item.subItems === undefined"
              :href="item.href"
              :class="[
                item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0'
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
            <span v-else :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']" @click="toggleSubItems(item)">
              <component :is="item.icon" :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
              {{ item.name }}
            </span>
          </div>

          <template v-if="item.subItems && item.isOpen === true">
            <ul role="list" class="mx-4 space-y-1">
              <li v-for="subItem in item.subItems" :key="subItem.name">
                <SecondaryButton v-if="subItem.onClick" block @click="clickNavigation(subItem.onClick)">
                  <component :is="subItem.icon" :class="[subItem.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0 inline mx-2']" aria-hidden="true" />
                  {{ subItem.name }}
                </SecondaryButton>

                <a
                  v-else
                  :href="subItem.href"
                  :class="[
                    subItem.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                  ]"
                >
                  <component
                    :is="subItem.icon"
                    :class="[
                      subItem.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                      'h-6 w-6 shrink-0'
                    ]"
                    aria-hidden="true"
                  />
                  {{ subItem.name }}
                </a>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TreeMenuContent } from './TreeMenuContent'
import { ref, type PropType } from 'vue'
import {
  ChevronRightIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'
import SecondaryButton from '../../template/secondary-button/SecondaryButton.vue'

const props = defineProps({
  navigationItems: {
    type: Array as PropType<TreeMenuContent[]>,
    required: true
  }
})

const navigationItems = ref(props.navigationItems)

function clickNavigation(func: (() => void) | null | undefined) {
  console.log(navigationItems.value);

  if (func) {
    func();
  } else {
    console.error("func is null or undefined");
  }
}

function openSubItems(item: TreeMenuContent) {
  navigationItems.value = navigationItems.value.map((currentItem: TreeMenuContent) => {
    if (currentItem.name === item.name) {
      currentItem.isOpen = true
    }
    return currentItem
  })
}

function closeSubItems(item: TreeMenuContent) {
  navigationItems.value = navigationItems.value.map((currentItem: TreeMenuContent) => {
    if (currentItem.name === item.name) {
      currentItem.isOpen = false
    }
    return currentItem
  })
}

function toggleSubItems(item: TreeMenuContent) {
  navigationItems.value = navigationItems.value.map((currentItem: TreeMenuContent) => {
    if (currentItem.name === item.name) {

      if (currentItem.isOpen === true) {
        currentItem.isOpen = false
      } else {
        currentItem.isOpen = true
      }
      
    }
    return currentItem
  })
}
</script>