<script setup lang="ts">
defineProps({
  bgClass: String,
  borderClass: String,
  colorToken: String,
});
</script>

<template>
  <div class="flex items-center">
    <div :class="`w-6 h-6 m-2 ${bgClass} ${borderClass} transition-colors duration-300`"></div>
    <p class="font-mono lg:text-lg">{{ colorToken }}</p>
  </div>
</template>
