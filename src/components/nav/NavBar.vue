<script setup lang="ts">
import NavLink from '@/components/nav/NavLink.vue';
import { ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components';

const modal = ref(false);

function closeModal() {
  modal.value = false;
}
</script>

<!--TODO: responsiveness on mobile. probably hamburger menu-->
<template>
  <div class="flex flex-col md:flex-row justify-center md:items-center my-3 flex-wrap">
    <nav-link link="/" name="home" />
    <nav-link link="about" name="about" />
    <nav-link link="contact" name="contact" />
    <nav-link link="projects" name="projects" />
    <nav-link link="themes" name="themes" />
    <!--    TODO: update cv and then add to the repo and change this code-->
    <!--    <a href="/mikey-ying-cv.pdf" download="mikey-ying-cv.pdf" class="inline-block">-->
    <!--      <button-->
    <!--        class="rounded w-full h-full p-1 px-4 text-nowrap bg-theme-main text-theme-bg hover:bg-theme-text focus:outline-none focus:ring-4 focus:ring-theme-text underline-offset-4 transition duration-300"-->
    <!--      >-->
    <!--        download cv-->
    <!--      </button>-->
    <!--    </a>-->
    <div class="relative my-10 md:my-3 md:mx-0 mx-auto">
      <button
        @click="modal = true"
        class="rounded p-1 px-4 text-3xl md:text-xl lg:text-2xl text-nowrap bg-theme-accent-alt text-theme-bg hover:bg-theme-text focus:outline-none focus:ring-4 focus:ring-theme-text underline-offset-4 transition duration-300"
      >
        download cv
      </button>
      <transition name="fade">
        <div
          v-if="modal"
          v-on-click-outside="closeModal"
          class="absolute left-1/2 transform -translate-x-1/2 rounded p-3 mt-2 text-base md:text-xs lg:text-sm bg-theme-main text-theme-bg selection:bg-theme-text w-max items-center"
        >
          Todo: rewrite CV 😅
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
