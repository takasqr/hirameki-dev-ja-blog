<template>
  <v-stage :config="configKonva">
    <v-layer>
      <v-circle :config="configCircle"></v-circle>
    </v-layer>
  </v-stage>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const configKonva = ref({
  width: 200,
  height: 200
})

const configCircle = ref({
  x: 100,
  y: 100,
  radius: 70,
  fill: "blue",
  stroke: "black",
  strokeWidth: 4,
  draggable: true,
})

</script>