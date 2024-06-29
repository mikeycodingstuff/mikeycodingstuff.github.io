<script setup lang="ts">
import Welcome from '@/components/Welcome.vue';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="flex flex-col justify-center items-center">
    <Welcome msg="Hello! Testing!" class="mb-5" />
    <button @click="toggleDark()">
      Toggle Color Mode
    </button>
    <p>Dark theme: {{ isDark }}</p>
    <p class="dark:text-red-500 text-green-500">red for dark, green for light</p>
  </header>
</template>
