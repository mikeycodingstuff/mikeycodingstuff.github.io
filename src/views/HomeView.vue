<script setup lang="ts">
import TypeWriter from '@/components/TypeWriter.vue';
import HeroNav from '@/components/nav/NavBar.vue';
import HomeHero from '@/components/hero/HomeHero.vue';

const typewriterText = ['^_^', 'full stack developer', 'laravel developer'];
</script>

<template>
  <div>
    <home-hero class="grid place-items-center md:grid-cols-2 gap-24 p-8">
      <template #header>
        <p class="leading-tight">Hello,</p>
        <p class="leading-tight">
          I'm
          <router-link
            to="/about"
            class="rounded text-theme-accent hover:text-theme-accent-alt focus:border-theme-bg focus:outline-none focus:ring-4 focus:ring-theme-accent transition ease-in-out duration-700"
            >Mikey</router-link
          >!
        </p>
      </template>

      <template #sub>
        <type-writer prompt=">" :text="typewriterText" />
      </template>
      <div>
        <div class="p-2">
          <p class="text-center transition-colors duration-300">
            Press <span class="text-theme-accent-alt">`Esc`</span> to navigate via the command bar
          </p>
        </div>
        <hero-nav />
      </div>
    </home-hero>
  </div>
</template>
