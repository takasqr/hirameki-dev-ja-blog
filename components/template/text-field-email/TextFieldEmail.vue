<template>
  <TextField
   id="email"
   type="email"
   name="email"
   autocomplete="email"
   :required="true"
   @change="change($event)"
   @input="input($event)"
  />
</template>

<script setup lang="ts">
import TextField from '../../basic/text-field/TextField.vue';

// イベントを定義
const emit = defineEmits({
  change: (value: string) => {
    return value
  },
  input: (value: string) => {
    return value
  }
})

function change(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target && target.value) {
    // 'change' イベントを発行し、入力値を渡す
    emit('change', target.value);
  }
}

function input(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target && target.value) {
    emit('input', target.value)
  }
}
</script>
