<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <slot/>
    </div>

    <SecondaryButton class="prev-btn opacity-50" @click="prev">
      <component :is="ChevronLeftIcon" class="h-5" aria-hidden="true" />
    </SecondaryButton>

    <SecondaryButton class="next-btn opacity-50" @click="next">
      <component :is="ChevronRightIcon" class="h-5" aria-hidden="true" />
    </SecondaryButton>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline';
import SecondaryButton from '../../template/secondary-button/SecondaryButton.vue';

const currentIndex = ref(0);
const totalItems = ref(0);
let intervalId: number | undefined;

onMounted(() => {
  const slotElements = document.querySelector('.carousel-inner')?.children || [];
  totalItems.value = slotElements.length;
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % totalItems.value;
};

const prev = () => {
  currentIndex.value = (currentIndex.value + totalItems.value - 1) % totalItems.value;
};

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    next();
  }, 5000) as unknown as number
};

const stopAutoSlide = () => {
  if (intervalId !== undefined) {
    clearInterval(intervalId);
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
}
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}
.carousel-inner > * {
  flex: 0 0 100%;
}
.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
  z-index: 10;
}
.prev-btn {
  left: 10px;
}
.next-btn {
  right: 10px;
}
</style>
