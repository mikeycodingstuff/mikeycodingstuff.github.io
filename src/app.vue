<script setup lang="ts">
const isHomePage = computed(() => useRoute().path === '/')
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col h-screen w-screen">
      <NavBar v-if="!isHomePage" />
      <NuxtPage class="grid md:grow md:place-items-center" />
    </div>
  </NuxtLayout>
</template>
