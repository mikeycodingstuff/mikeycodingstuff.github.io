<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
</script>

<template>
  <div class="flex flex-col justify-center items-center text-theme-text">
    <the-welcome msg="Welcome!" class="mb-5" />
    <theme-switcher />
  </div>
</template>
