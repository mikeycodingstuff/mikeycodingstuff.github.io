<script setup lang="ts">
defineProps({
  link: String,
});
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="rounded text-theme-accent hover:text-theme-accent-alt focus:outline-none focus:ring-4 focus:ring-theme-accent transition duration-300"
    ><slot
  /></a>
</template>
