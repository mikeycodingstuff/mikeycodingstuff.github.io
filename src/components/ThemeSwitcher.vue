<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import ColorSwatch from '@/components/ColorSwatch.vue';
import { themes } from '@/themes';

const colorMode = useColorMode({
  attribute: 'theme',
  disableTransition: false,
  modes: themes
});

const switchTheme = () => {
  if (colorMode.value === 'dark') {
    colorMode.value = 'light';
  } else if (colorMode.value === 'light') {
    colorMode.value = 'rose-pine-moon';
  } else if (colorMode.value === 'rose-pine-moon') {
    colorMode.value = 'dark';
  }
};

const unKebab = (string) => string.replace(/-/g, ' ');
</script>

<template>
  <div class="grid gap-10 w-full place-items-center">
    <p
      class="text-2xl text-center text-theme-accent font-mono lowercase transition-colors duration-300"
    >
      {{ unKebab(colorMode) }}
    </p>

    <div class="grid space-y-5 w-full">
      <color-swatch bg-class="bg-theme-main" color-token="main" />
      <color-swatch bg-class="bg-theme-text" color-token="text" />
      <color-swatch bg-class="bg-theme-muted" color-token="muted" />
      <color-swatch bg-class="bg-theme-accent" color-token="accent" />
      <color-swatch
        bg-class="bg-theme-bg-primary"
        border-class="border border-theme-text"
        color-token="bg-primary"
      />
      <color-swatch bg-class="bg-theme-bg-secondary" color-token="bg-secondary" />
    </div>

    <div>
      <button
        @click="switchTheme"
        class="px-4 py-2 bg-theme-bg-secondary border border-theme-text hover:text-theme-accent hover:border-theme-accent transition-colors duration-300"
      >
        Switch Theme
      </button>
    </div>
  </div>
</template>
