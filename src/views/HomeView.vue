<script setup lang="ts">
import TypeWriter from '@/components/TypeWriter.vue';
import HeroNav from '@/components/hero/HeroNav.vue';
import HomeHero from '@/components/hero/HomeHero.vue';

const typewriterText = ['^_^', 'full stack developer', 'laravel developer'];
</script>

<template>
  <div class="h-screen w-screen grid place-items-center">
    <home-hero class="grid place-items-center md:grid-cols-2 gap-24 p-8">
      <template #header>
        Hello,
        <br />
        I'm
        <router-link
          to="/about"
          class="text-theme-accent hover:text-theme-accent-alt focus:border-theme-bg-primary focus:outline-none focus:ring-4 focus:ring-theme-main transition ease-in-out duration-300"
          >Mikey</router-link
        >!
      </template>

      <template #sub>
        <type-writer prompt=">" :text="typewriterText" />
      </template>
      <hero-nav />
    </home-hero>
  </div>
</template>
