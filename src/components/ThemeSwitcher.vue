<script setup>
import { useColorMode } from '@vueuse/core';

const modes = {
  light: 'light',
  dark: 'dark',
  cafe: 'cafe'
};

const colorMode = useColorMode({
  disableTransition: false,
  modes,
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
    <h1 class="text-2xl">
      Current theme: <span class="text-theme-accent capitalize">{{ colorMode }}</span>
    </h1>
    <button
      @click="switchTheme"
      class="p-3 bg-theme-main border border-theme-text hover:text-theme-accent hover:border-theme-accent transition-colors"
    >
      Switch Theme
    </button>
  </div>
  <div class="text-center mt-12">
    <h1 class="text-2xl">Theme colours:</h1>
    <div class="flex">
      <div class="flex bg-theme-main w-24 h-16 items-center justify-center">main</div>
      <div class="flex bg-theme-text text-theme-main w-24 h-16 items-center justify-center">
        text
      </div>
      <div class="flex bg-theme-accent w-24 h-16 items-center justify-center">accent</div>
      <div
        class="flex bg-theme-bg-primary border border-theme-text w-24 h-16 items-center justify-center"
      >
        bg-primary
      </div>
    </div>
  </div>

  <div class="mt-12">
    <h1 class="text-2xl text-left">Themes:</h1>
    <ul v-for="mode in modes" :key="mode">
      <li class="list-disc">{{ mode }}</li>
    </ul>
  </div>
</template>
