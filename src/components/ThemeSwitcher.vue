<script setup lang="ts">
import { useColorMode } from '@vueuse/core';

const colorMode = useColorMode({
  disableTransition: false,
  modes: {
    cafe: 'cafe',
  },
  attribute: 'theme'
});

const switchTheme = () => {
  if (colorMode.value === 'dark') {
    colorMode.value = 'cafe';
  } else if (colorMode.value === 'cafe') {
    colorMode.value = 'light';
  } else if (colorMode.value === 'light') {
    colorMode.value = 'dark';
  }
};
</script>

<template>
  <div class="flex items-center gap-5">
    <h1 class="text-xl">Current theme: {{ colorMode }}</h1>
    <button
      @click="switchTheme"
      class="p-3 border border-theme-text hover:text-theme-accent hover:border-theme-accent transition-colors"
    >
      Switch Theme
    </button>
  </div>
  <p class="text-theme-accent">--accent</p>
</template>
