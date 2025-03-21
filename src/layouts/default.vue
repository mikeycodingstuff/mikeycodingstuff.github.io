<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-theme-bg text-theme-text selection:bg-theme-bg-alt transition-colors duration-300',
  },
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
