<script setup lang="ts">
import HomeHero from '@/components/HomeHero.vue';
import TypeWriter from '@/components/TypeWriter.vue';
import HeroNav from '@/components/HeroNav.vue';
import { useColorMode } from '@vueuse/core';
import { themes } from '@/themes';

useColorMode({
  attribute: 'theme',
  disableTransition: false,
  modes: themes
});

const typewriterText = ['^_^', 'full stack developer', 'laravel developer'];
</script>

<template>
  <div class="h-screen w-screen text-theme-text grid place-items-center">
    <home-hero class="grid place-items-center md:grid-cols-2 gap-24 p-8">
      <template #header>
        Hello,
        <br />
        I'm
        <router-link
          to="/"
          class="text-theme-accent hover:text-theme-accent-alt underline transition-colors duration-700 focus:outline-none ease-in-out"
          >Mikey</router-link
        >!
      </template>

      <template #sub>
        <type-writer prompt=">" :text="typewriterText" />
      </template>
      <hero-nav />
    </home-hero>
    <router-view />
  </div>
</template>
