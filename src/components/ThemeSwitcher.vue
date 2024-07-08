<script setup>
import { useColorMode } from '@vueuse/core';
import ColorSwatch from '@/components/ColorSwatch.vue';

const colorMode = useColorMode({
  disableTransition: false,
  options: {
    light: 'light',
    dark: 'dark',
    cafe: 'cafe',
    'rose-pine-moon': 'rose-pine-moon'
  },
  attribute: 'theme'
});

const switchTheme = () => {
  if (colorMode.value === 'dark') {
    colorMode.value = 'cafe';
  } else if (colorMode.value === 'cafe') {
    colorMode.value = 'light';
  } else if (colorMode.value === 'light') {
    colorMode.value = 'rose-pine-moon';
  } else if (colorMode.value === 'rose-pine-moon') {
    colorMode.value = 'dark';
  }
};
</script>

<template>
  <div class="grid gap-10">
    <div class="mt-3 w-64">
      <h1 class="text-2xl text-center mb-3 font-mono">colours:</h1>
      <div class="grid space-y-5">
        <color-swatch color-token="main" />
        <color-swatch color-token="text" />
        <color-swatch color-token="muted" />
        <color-swatch color-token="bg-primary" borderColorToken="text" />
      </div>
    </div>

    <div class="flex items-center gap-5">
      <button
        @click="switchTheme"
        class="p-3 bg-theme-main border border-theme-text hover:text-theme-accent hover:border-theme-accent transition-colors"
      >
        Switch Theme
      </button>
      <h1 class="text-2xl">
        Current theme: <span class="text-theme-accent capitalize">{{ colorMode }}</span>
      </h1>
    </div>
  </div>
</template>
