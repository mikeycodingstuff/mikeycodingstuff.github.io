<script setup lang="ts">
import { themes } from '@/themes'

const isHomePage = computed(() => useRoute().path === '/')

// useColorMode({
//   attribute: 'theme',
//   disableTransition: false,
//   modes: themes,
//   initialValue: 'rose-pine-moon',
// })
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col h-screen w-screen">
      <NavBar v-if="!isHomePage" />
      <NuxtPage class="grid md:grow md:place-items-center" />
    </div>
  </NuxtLayout>
</template>
