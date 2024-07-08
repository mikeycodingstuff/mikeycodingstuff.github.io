<script setup>
defineProps({
  colorToken: String,
  borderColorToken: String
});
</script>

<template>
  <div class="flex items-center space-x-2">
    <div
      :class="
        borderColorToken
          ? `border border-${borderColorToken} w-6 h-6 bg-theme-${colorToken}`
          : `w-6 h-6 bg-theme-${colorToken}`
      "
    ></div>
    <span class="font-mono">{{ colorToken }}</span>
    <span class="font-mono">{{ borderColorToken }}</span>
  </div>
</template>
