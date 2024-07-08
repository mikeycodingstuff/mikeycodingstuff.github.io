<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import ColorSwatch from '@/components/ColorSwatch.vue';
import { themes } from '@/themes';

const colorMode = useColorMode({
  attribute: 'theme',
  disableTransition: false,
  modes: themes
});

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
      <color-swatch
        bg-class="bg-theme-bg-primary"
        border-class="border border-theme-text"
        color-token="bg-primary"
      />
      <color-swatch bg-class="bg-theme-bg-secondary" color-token="bg-secondary" />
      <color-swatch bg-class="bg-theme-main" color-token="main" />
      <color-swatch bg-class="bg-theme-accent" color-token="accent" />
      <color-swatch bg-class="bg-theme-accent-alt" color-token="accent-alt" />
      <color-swatch bg-class="bg-theme-text" color-token="text" />
      <color-swatch bg-class="bg-theme-error" color-token="error" />
      <color-swatch bg-class="bg-theme-error-alt" color-token="error-alt" />
    </div>

    <div>
      <select
        v-model="colorMode"
        class="p-2 rounded bg-theme-main text-theme-bg-primary border-2 border-transparent focus:border-theme-bg-primary focus:outline-none focus:ring-4 focus:ring-theme-main transition ease-in-out duration-300"
      >
        <option v-for="(theme, key, index) in themes" :value="theme" :key="index">
          {{ theme }}
        </option>
      </select>
    </div>
  </div>
</template>
