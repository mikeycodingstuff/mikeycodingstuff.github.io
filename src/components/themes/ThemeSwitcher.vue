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
  <div class="rounded grid gap-10 place-items-center">
    <p class="text-nowrap text-2xl text-center lowercase">
      {{ unKebab(colorMode) }}
    </p>

    <div>
      <select
        v-model="colorMode"
        class="p-2 rounded bg-theme-main text-theme-bg border-2 border-transparent focus:border-theme-bg focus:outline-none focus:ring-4 focus:ring-theme-main transition ease-in-out"
      >
        <option v-for="(theme, key, index) in themes" :value="theme" :key="index">
          {{ theme }}
        </option>
      </select>
    </div>
  </div>
</template>
