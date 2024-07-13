<script setup lang="ts">
import ColorSwatch from '@/components/themes/ColorSwatch.vue';
</script>

<template>
  <div class="p-2 grid grid-cols-2 gap-y-5">
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
</template>
