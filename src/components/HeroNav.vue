<script setup>
import HeroNavLink from '@/components/HeroNavLink.vue';
</script>

<template>
  <div>
    <p class="text-theme-accent-alt">Press <span class="font-mono">`Esc`</span> to navigate via the command bar</p>
    <div class="flex justify-center">
      <hero-nav-link link="/" name="home" />
      <hero-nav-link link="about" name="about" />
      <hero-nav-link link="contact" name="contact" />
      <hero-nav-link link="projects" name="projects" />
      <hero-nav-link link="themes" name="themes" />
    </div>
  </div>
</template>
