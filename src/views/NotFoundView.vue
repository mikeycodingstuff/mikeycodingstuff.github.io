<script setup>
import InternalLink from '@/components/nav/InternalLink.vue';
</script>

<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="text-6xl text-theme-main m-4">
        Not Found
      </h1>
      <p class="text-xl m-4">
        Oops, couldn't find that page! Time to head <internal-link link="/">home</internal-link>.
      </p>
    </div>
  </div>
</template>
