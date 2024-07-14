<script setup>
import NavLink from '@/components/nav/NavLink.vue';
</script>

<template>
  <div class="flex justify-center my-3">
    <nav-link link="/" name="home" />
    <nav-link link="about" name="about" />
    <nav-link link="contact" name="contact" />
    <nav-link link="projects" name="projects" />
    <nav-link link="themes" name="themes" />
    <button
      class="rounded p-1 px-4 bg-theme-main text-theme-bg hover:bg-theme-text focus:outline-none focus:ring-4 focus:ring-theme-text underline-offset-4 transition duration-300"
    >
      download cv
    </button>
  </div>
</template>
