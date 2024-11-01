<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-30 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                <div class="flex h-4 shrink-0 items-center"/>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <TreeMenu :navigation-items="navigationTop"/>
                      </ul>
                    </li>

                    <li class="-mx-6 mt-auto px-6 py-2">
                      <ul role="list" class="-mx-2 space-y-1">
                        <TreeMenu :navigation-items="navigationBottom"/>
                      </ul>
                    </li>

                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-30 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <div class="flex h-4 shrink-0 items-center">
          <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> -->
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <TreeMenu :navigation-items="navigationTop"/>
              </ul>
            </li>


            <li class="-mx-6 mt-auto p-6 px-2">
              <ul role="list" class="mx-2 space-y-1">
                <TreeMenu :navigation-items="navigationBottom"/>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <AppBar :title="title" @open="sidebarOpen = true"/>

    <main class="lg:pl-72">
      <div class="">
        <!-- Your content -->
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { NavigationDrawerContent } from './NavigationDrawerContent'
import { ref, watch, type PropType } from 'vue'
import { useRoute } from 'vue-router'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import TreeMenu from '../tree-menu/TreeMenu.vue'
import AppBar from '../app-bar/AppBar.vue'

const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: "Dashboard"
  },
  navigationTop: {
    type: Array as PropType<NavigationDrawerContent[]>,
    required: true
  },
  navigationBottom: {
    type: Array as PropType<NavigationDrawerContent[]>,
    required: true
  }
})

const navigationTop = ref(props.navigationTop)
const navigationBottom = ref(props.navigationBottom)

const sidebarOpen = ref(false)

const route = useRoute()

watch(route, (newRoute) => {
  // current、isOpen を設定
  navigationTop.value.forEach(item => {
    item.current = item.href === newRoute.path;
    // current だったら sub を表示させる
    item.isOpen = true
  });
}, { immediate: true });
</script>