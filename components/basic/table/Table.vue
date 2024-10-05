<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" v-for="record in data" :key="record">
          <dt class="text-sm font-medium leading-6 text-gray-900">{{ record.title }}</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ record.content }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Record {
  title: string;
  content: string;
}

const data: Record[] = [{
  title: 'data1',
  content: 'content1'
},
{
  title: 'data2',
  content: 'content2'
}]
</script>