<script setup lang="ts">
import ColorSwatch from '@/components/themes/ColorSwatch.vue';
</script>

<template>
  <div class="flex justify-center">
    <color-swatch bg-class="bg-theme-bg" />
    <color-swatch bg-class="bg-theme-main" />
    <color-swatch bg-class="bg-theme-accent" />
    <color-swatch bg-class="bg-theme-accent-alt" />
    <color-swatch bg-class="bg-theme-text" />
  </div>
</template>
