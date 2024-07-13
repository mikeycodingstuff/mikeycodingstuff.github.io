<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { themes } from '@/themes';
import NavBar from '@/components/nav/NavBar.vue';

useColorMode({
  attribute: 'theme',
  disableTransition: false,
  modes: themes,
});
</script>

<template>
  <nav-bar v-if="$route.path !== '/'"></nav-bar>
  <router-view class="h-screen w-screen grid place-items-center" />
</template>
