<script setup lang="ts">
defineProps({
  bgClass: {
    type: String,
    default: null,
  },
  borderClass: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="flex items-center">
    <div :class="`w-6 h-6 ${bgClass} ${borderClass} transition-colors duration-300`" />
    <p v-if="label" class="lg:text-lg">
      {{ label }}
    </p>
  </div>
</template>
