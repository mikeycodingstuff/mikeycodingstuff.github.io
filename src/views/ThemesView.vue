<script setup lang="ts">
import ThemeSwitcher from '@/components/themes/ThemeSwitcher.vue';
import ThemeColorsDisplay from '@/components/themes/ThemeColorsDisplay.vue';
</script>

<template>
  <div class="h-screen w-screen grid grid-cols-2 place-items-center">
    <theme-switcher />
    <theme-colors-display />
  </div>
</template>
