<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { themes } from '@/themes';
import { unKebab } from '@/helpers';

const colorMode = useColorMode({
  attribute: 'theme',
  disableTransition: false,
  modes: themes,
});
</script>

<template>
  <div class="p-12 rounded grid gap-10 place-items-center bg-theme-bg-secondary w-72">
    <p class="text-2xl text-center text-theme-accent font-mono lowercase transition-colors">
      {{ unKebab(colorMode) }}
    </p>

    <div>
      <select
        v-model="colorMode"
        class="p-2 rounded bg-theme-main text-theme-bg-primary border-2 border-transparent focus:border-theme-bg-primary focus:outline-none focus:ring-4 focus:ring-theme-main transition ease-in-out"
      >
        <option v-for="(theme, key, index) in themes" :value="theme" :key="index">
          {{ theme }}
        </option>
      </select>
    </div>
  </div>
</template>
