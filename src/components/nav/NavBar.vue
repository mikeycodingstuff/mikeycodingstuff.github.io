<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import NavLink from '@/components/nav/NavLink.vue';

const open = ref(false);

const toggleMenu = () => {
  open.value = !open.value;
};

const route = useRoute();
const isHomePage = computed(() => route.path === '/');
</script>

<template>
  <div class="flex md:justify-center items-center">
    <!-- Hamburger Menu Button -->
    <button v-if="!isHomePage" @click="toggleMenu" class="md:hidden p-2 focus:outline-none">
      <svg
        class="w-8 h-8 text-theme-main"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>

  <!-- Desktop Navigation -->
  <div
    v-if="!isHomePage"
    class="hidden md:flex justify-center md:items-center my-3 flex-wrap space-x-6"
  >
    <nav-link link="/" name="home" />
    <nav-link link="/about" name="about" />
    <nav-link link="/contact" name="contact" />
    <nav-link link="/projects" name="projects" />
    <nav-link link="/themes" name="themes" />
  </div>

  <!-- Mobile Navigation -->
  <div
    v-if="open || isHomePage"
    class="flex flex-col lg:flex-row justify-center lg:items-center my-3 flex-wrap"
  >
    <nav-link link="/" name="home" />
    <nav-link link="about" name="about" />
    <nav-link link="contact" name="contact" />
    <nav-link link="projects" name="projects" />
    <nav-link link="themes" name="themes" />
  </div>
</template>
