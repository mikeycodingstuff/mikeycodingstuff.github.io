<script setup lang="ts">
const open = ref(false)

function toggleMenu() {
  open.value = !open.value
}

const isHomePage = computed(() => useRoute().path === '/')

watch(() => useRoute().path, () => {
  open.value = false
})
</script>

<template>
  <div class="flex md:justify-center items-center">
    <!-- Hamburger Menu Button -->
    <!-- TODO: add animations - refactor to alpine? -->
    <button v-if="!isHomePage" class="p-2 focus:outline-hidden md:hidden" @click="toggleMenu">
      <svg
        class="w-12 h-12 text-theme-main"
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

  <div>
    <!--        TODO: implement command bar -->
    <!--        <div class="p-2 hidden md:block"> -->
    <!--          <p class="text-center md:text-sm lg:text-base xl:text-lg transition-colors duration-300"> -->
    <!--            Press <span class="text-theme-accent-alt">`Esc`</span> to navigate via the command bar -->
    <!--          </p> -->
    <!--        </div> -->
  </div>

  <!-- Desktop Navigation -->
  <div
    v-if="!isHomePage"
    class="hidden justify-center items-center my-3 flex-wrap space-x-6 md:flex"
  >
    <NavLink to="/" name="home" />
    <NavLink to="/about" name="about" />
    <NavLink to="/projects" name="projects" />
    <NavLink to="/themes" name="themes" />
  </div>

  <!-- Mobile Home Page Navigation -->
  <div
    v-if="isHomePage"
    class="justify-center items-center my-3 flex-wrap space-x-6 md:flex"
  >
    <NavLink to="/" name="home" />
    <NavLink to="/about" name="about" />
    <NavLink to="/projects" name="projects" />
    <NavLink to="/themes" name="themes" />
  </div>

  <!-- Mobile Navigation -->
  <div
    v-if="open"
    class="top-0 flex flex-col lg:flex-row justify-center lg:items-center  flex-wrap"
  >
    <NavLink to="/" name="home" />
    <NavLink to="/about" name="about" />
    <NavLink to="/projects" name="projects" />
    <NavLink to="/themes" name="themes" />
    <hr class="w-48 mb-8 mt-4 h-1 mx-auto bg-theme-main rounded-md">
  </div>
</template>
