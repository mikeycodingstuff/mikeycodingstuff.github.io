<script setup lang="ts">
import { messages } from '@/typewriter'
</script>

<template>
  <div>
    <HomeHero class="grid md:place-items-center md:grid-cols-2 h-screen container">
      <template #header>
        <p class="leading-tight">
          Hello,
        </p>
        <p class="leading-tight text-nowrap">
          I'm
          <NuxtLink
            to="/about"
            class="rounded-sm text-theme-accent hover:text-theme-accent-alt focus:border-theme-bg focus:outline-hidden focus:ring-4 focus:ring-theme-accent transition ease-in-out duration-700"
          >
            <!-- eslint-disable -->
            Mikey</NuxtLink>!
          <!-- eslint-enable -->
        </p>
      </template>

      <template #sub>
        <type-writer :messages="messages" />
      </template>

      <div>
        <!--        TODO: implement command bar -->
        <!--        <div class="p-2 hidden md:block"> -->
        <!--          <p class="text-center md:text-sm lg:text-base xl:text-lg transition-colors duration-300"> -->
        <!--            Press <span class="text-theme-accent-alt">`Esc`</span> to navigate via the command bar -->
        <!--          </p> -->
        <!--        </div> -->

        <nav-bar />
      </div>
    </HomeHero>
  </div>
</template>
