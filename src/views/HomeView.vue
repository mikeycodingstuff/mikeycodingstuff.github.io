<script setup lang="ts">
import TypeWriter from '@/components/TypeWriter.vue';
import NavBar from '@/components/nav/NavBar.vue';
import HomeHero from '@/components/hero/HomeHero.vue';
import { messages } from '@/typewriter';
</script>

<template>
  <div>
    <home-hero class="grid md:place-items-center md:grid-cols-2 h-screen container">
      <template #header>
        <p class="leading-tight">Hello,</p>
        <p class="leading-tight text-nowrap">
          I'm
          <router-link
            to="/about"
            class="rounded text-theme-accent hover:text-theme-accent-alt focus:border-theme-bg focus:outline-none focus:ring-4 focus:ring-theme-accent transition ease-in-out duration-700"
            >Mikey</router-link
          >!
        </p>
      </template>

      <template #sub>
        <type-writer :messages="messages" />
      </template>

      <div>
        <div class="p-2 hidden md:block">
          <p class="text-center md:text-sm lg:text-base xl:text-lg transition-colors duration-300">
            Press <span class="text-theme-accent-alt">`Esc`</span> to navigate via the command bar
          </p>
        </div>

        <nav-bar />
      </div>
    </home-hero>
  </div>
</template>
