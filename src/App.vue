<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { themes } from '@/themes';
import NavBar from '@/components/nav/NavBar.vue';

useColorMode({
  attribute: 'theme',
  disableTransition: false,
  modes: themes,
  initialValue: 'rose-pine-moon',
});
</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <nav-bar v-if="$route.path !== '/'"></nav-bar>
    <router-view class="grid md:grow md:place-items-center" />
  </div>
</template>
