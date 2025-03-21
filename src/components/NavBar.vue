<script setup lang="ts">
const open = ref(false)

function toggleMenu() {
  open.value = !open.value
}

const isHomePage = computed(() => useRoute().path === '/')
</script>

<template>
  <div class="flex md:justify-center items-center">
    <!-- Hamburger Menu Button -->
    <!-- TODO: add animations - refactor to alpine? -->
    <button v-if="!isHomePage" class="md:hidden p-2 focus:outline-hidden" @click="toggleMenu">
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
    <NavLink to="/" name="home" />
    <NavLink to="/about" name="about" />
    <NavLink to="/projects" name="projects" />
    <NavLink to="/themes" name="themes" />
  </div>

  <!-- Mobile Navigation -->
  <div
    v-if="open || isHomePage"
    class="flex flex-col lg:flex-row justify-center lg:items-center my-3 flex-wrap"
  >
    <NavLink to="/" name="home" />
    <NavLink to="/about" name="about" />
    <NavLink to="/projects" name="projects" />
    <NavLink to="/themes" name="themes" />
  </div>
</template>
