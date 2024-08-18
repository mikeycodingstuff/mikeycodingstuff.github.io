<script setup lang="ts">
defineProps({
  bgClass: String,
  borderClass: String,
  label: String,
});
</script>

<template>
  <div class="flex items-center">
    <div :class="`w-6 h-6 ${bgClass} ${borderClass} transition-colors duration-300`"></div>
    <p v-if="label" class="lg:text-lg">{{ label }}</p>
  </div>
</template>
