<script setup>
defineProps({
  link: String,
  name: String
});
</script>

<template>
  <div class="p-2">
    <router-link
      :to="link"
      class="rounded p-1 text-2xl hover:text-theme-main focus:border-theme-bg-primary focus:outline-none focus:ring-4 focus:ring-theme-main transition-shadow duration-300 underline-offset-4 decoration-4 decoration-theme-main"
      activeClass="underline"
      >{{ name }}</router-link
    >
  </div>
</template>
