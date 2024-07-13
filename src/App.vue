<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { themes } from '@/themes';
import HeroNav from '@/components/hero/HeroNav.vue';

useColorMode({
  attribute: 'theme',
  disableTransition: false,
  modes: themes,
});
</script>

<template>
  <div>
    <hero-nav v-if="$route.path !== '/'"></hero-nav>
    <router-view />
  </div>
</template>
