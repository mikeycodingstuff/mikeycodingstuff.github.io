<script setup lang="ts">
import { themes } from '~/themes'

useHead({
  bodyAttrs: {
    class: 'bg-theme-bg text-theme-text selection:bg-theme-bg-alt transition-colors duration-300',
  },
})

useColorMode({
  attribute: 'theme',
  disableTransition: false,
  modes: themes,
  initialValue: 'rose-pine-moon',
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
