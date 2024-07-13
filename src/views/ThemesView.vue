<script setup lang="ts">
import ThemeSwitcher from '@/components/themes/ThemeSwitcher.vue';
import ThemeColorsDisplay from '@/components/themes/ThemeColorsDisplay.vue';
</script>

<template>
  <div class="flex items-center justify-center p-12 gap-20">
    <theme-switcher />
    <theme-colors-display />
  </div>
</template>
