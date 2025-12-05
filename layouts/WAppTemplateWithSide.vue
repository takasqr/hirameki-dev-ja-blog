<template>
  <div class="bg-[#FFEE7D]">
    <slot name="header" />

    <w-container-wide>
      <div class="bg-white mt-6 p-4 border-2 border-black rounded-2xl">
        <w-spacer-island>
          <slot name="ad" />
        </w-spacer-island>

        <w-spacer-island>
          <slot name="title" />
        </w-spacer-island>

        <slot name="meta" />

        <div class="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-4">
          <main class="min-w-0">
            <slot />
          </main>

          <aside>
            <div class="sticky top-4 w-full">
              <slot name="sidebar" />
            </div>
          </aside>
        </div>
      </div>

      <w-spacer-island>
        <slot name="bottom" />
      </w-spacer-island>
    </w-container-wide>

    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
// import WContainer from '../../basic/container/WContainer.vue';
// import WContainer from 'vanilla-vue-ui/basic/container/WContainer.vue'
import WSpacerIsland from 'vanilla-vue-ui/template/spacer-island/WSpacerIsland.vue'
import WContainerWide from './WContainerWide.vue'
// import WSpacerIsland from '../../template/spacer-island/WSpacerIsland.vue'
// import WSpacerLadder from '../../template/spacer-ladder/WSpacerLadder.vue';
// import WSpacerLadder from 'vanilla-vue-ui/template/spacer-ladder/WSpacerLadder.vue'
</script>
