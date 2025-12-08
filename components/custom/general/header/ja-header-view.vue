<template>
  <div class="bg-white border-b-2 border-black">
    <header class="inset-x-0 top-0 z-50">
      <nav
        class=""
        aria-label="Global"
      >
        <div class="mx-auto max-w-3xl">
          <div class="flex items-center justify-between pt-6 pb-2 px-4 md:px-0">
            <div class="flex lg:flex-1">
              <a
                :href="logoUrl"
                class="-m-1.5 p-1.5"
              >
                <LogoImage />
              </a>
            </div>

            <div class="flex">
              <div class="mx-4 flex items-center">
                <!-- <ClientOnly>
                  <LanguageButton />
                </ClientOnly> -->
              </div>

              <div class="flex lg:hidden">
                <button
                  type="button"
                  class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  @click="mobileMenuOpen = true"
                >
                  <span class="sr-only">メインメニューを開く</span>
                  <Bars3Icon
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div class="hidden lg:flex lg:gap-x-12">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="text-sm font-semibold leading-6 text-gray-900"
                >{{ item.name }}</a>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-black py-1 mt-2 px-4 lg:px-0">
          <div class="mx-auto max-w-3xl spx-4 md:px-0 flex items-center">
            <HeaderSignageJaWithSide />
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        :open="mobileMenuOpen"
        @close="mobileMenuOpen = false"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a
              :href="logoUrl"
              class="-m-1.5 p-1.5"
            >
              <LogoImage />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">メニューを閉じる</span>
              <XMarkIcon
                class="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
// import LanguageButton from '../language-button/LanguageButton.vue'
import HeaderSignageJaWithSide from '../../header-signage/HeaderSignageJaWithSide.vue'
import LogoImage from '../LogoImage.vue'

const lang = 'ja'
const logoUrl = '/ja/'

const navigation = [
  // { name: 'ログイン', href: `https://hirameki.dev/${lang}/signin/` },
  { name: 'お問い合わせ', href: `/${lang}/contact/` },
]

const mobileMenuOpen = ref(false)
</script>
