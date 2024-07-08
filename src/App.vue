<script setup lang="ts">
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
import HomeHero from '@/components/HomeHero.vue';
</script>

<template>
  <div class="h-screen w-screen text-theme-text grid place-items-center">
    <home-hero class="grid place-items-center md:grid-cols-2 gap-24 p-8">
      <template #header>
        <p class="leading-tight">
          Hello,
          <br />
          I'm Mikey!
        </p>
      </template>

      <theme-switcher />
    </home-hero>
  </div>
</template>
