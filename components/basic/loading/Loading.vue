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
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full sm:w-full sm:max-w-sm sm:p-6">
              <div>
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                  <div class="animate-spin h-10 w-10 border-4 primary rounded-full border-t-transparent"></div>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">{{ title }}</DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">{{ contentText }}</p>
                    <slot />
                  </div>
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
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { LoadingStore } from './LoadingStore'

// ダイアログ用 state を購読
const dialogStore = LoadingStore()
// ストアの状態とアクションをコンポーネントにマッピング
const isOpen = dialogStore.isOpen;
const title = dialogStore.getTitle;
const contentText = dialogStore.getContentText;
const persistent = dialogStore.getPersistent

// ダイアログを閉じる
function close({ isConfirmed }: { isConfirmed: boolean | null }) {
  
  // 回答が強制されていて、ボタンを押してない場合はダイアログを閉じさせない
  if (persistent.value == false || isConfirmed != null) {
    dialogStore.close({ isConfirmed: isConfirmed })
  }
}

</script>