<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-10" @close="close({ isConfirmed: null })">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel :class="fullClassObject" class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full sm:w-full sm:max-w-sm sm:p-6">
              <div :class="{ 'flex-grow': full }" class="">
                <div class="relative">
                  <div class="absolute top-0 right-0">
                    <XmarkSolidIcon @click="forceClose"/>
                  </div>
      
                  <slot />
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PopupStore } from './PopupStore'
import XmarkSolidIcon from '../../icon/xmark/XmarkSolidIcon.vue';

const props = defineProps({
  full: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})

const fullClassObject = {
  'flex': props.full,
  'flex-col': props.full,
  'min-h-screen': props.full
}

// ダイアログ用 state を購読
const popupStore = PopupStore()
// ストアの状態とアクションをコンポーネントにマッピング
const isOpen = popupStore.isOpen;
const persistent = popupStore.getPersistent

// ダイアログを閉じる
function close({ isConfirmed }: { isConfirmed: boolean | null }) {
  
  // 回答が強制されていて、ボタンを押してない場合はダイアログを閉じさせない
  if (persistent.value == false || isConfirmed != null) {
    popupStore.close({ isConfirmed: isConfirmed })
  }
}

function forceClose() {
  popupStore.close({ isConfirmed: null})
}
</script>