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
        <NavBar />
      </div>
    </HomeHero>
  </div>
</template>
