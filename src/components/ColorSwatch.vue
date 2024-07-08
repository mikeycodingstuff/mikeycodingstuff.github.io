<script setup lang="ts">
defineProps({
  bgClass: String,
  borderClass: String,
  colorToken: String
});
</script>

<template>
  <div class="flex items-center space-x-2">
    <div :class="`w-6 h-6 ${bgClass} ${borderClass} transition-colors duration-300`"></div>
    <span class="font-mono transition-colors duration-300">{{ colorToken }}</span>
  </div>
</template>
