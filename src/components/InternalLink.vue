<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <NuxtLink
    :to="to"
    class="rounded-sm text-theme-accent hover:text-theme-accent-alt focus:outline-hidden focus:ring-4 focus:ring-theme-accent transition duration-300"
  >
    {{ name }}
  </NuxtLink>
</template>
