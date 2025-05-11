<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-theme-bg text-theme-text selection:bg-theme-bg-alt transition-colors duration-300',
  },
})

const isHomePage = computed(() => useRoute().path === '/')
</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <CommandPalette />
    <NavBar v-if="!isHomePage" />
    <slot />
  </div>
</template>
