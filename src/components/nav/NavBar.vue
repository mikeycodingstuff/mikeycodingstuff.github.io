<script setup lang="ts">
import NavLink from '@/components/nav/NavLink.vue';
</script>

<!--TODO: responsiveness on mobile. probably hamburger menu-->
<template>
  <div class="flex flex-col md:flex-row justify-center md:items-center my-3 flex-wrap">
    <nav-link link="/" name="home" />
    <nav-link link="about" name="about" />
    <nav-link link="contact" name="contact" />
    <nav-link link="projects" name="projects" />
    <nav-link link="themes" name="themes" />
  </div>
</template>
