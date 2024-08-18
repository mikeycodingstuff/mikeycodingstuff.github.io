<script setup lang="ts">
defineProps({
  link: String,
});
</script>

<template>
  <router-link
    :to="link"
    class="rounded text-theme-accent hover:text-theme-accent-alt focus:outline-none focus:ring-4 focus:ring-theme-accent transition duration-300"
    ><slot
  /></router-link>
</template>
