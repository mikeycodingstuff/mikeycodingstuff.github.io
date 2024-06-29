<script setup lang="ts">
import Welcome from '@/components/Welcome.vue'
import { ref } from 'vue'

let count = ref(0);

function increment() {
  count.value++
}

</script>

<template>
  <header class="flex flex-col justify-center items-center">
    <Welcome msg="Hello! Testing!" class="mb-5"/>
    <div class="flex items-center justify-between w-full gap-5">
      <div class="text-2xl">count: {{ count }}</div>
      <button @click="increment" class="border border-black rounded p-2">+</button>
    </div>
  </header>
</template>
