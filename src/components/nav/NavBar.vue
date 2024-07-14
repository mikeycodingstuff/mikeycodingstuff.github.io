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
    <button class="rounded p-1 px-4 bg-theme-bg-alt text-theme-main hover:bg-theme-text hover:text-theme-bg hover:decoration-theme-accent focus:outline-none focus:ring-4 focus:ring-theme-main underline-offset-4 decoration-4 decoration-theme-main transition duration-300">download cv</button>
  </div>
</template>
