<script setup>
defineProps({
  prompt: String,
  text: Array
});
</script>

<template>
  <div class="mt-4">
    <p class="font-mono text-theme-text">
      <span class="">{{ prompt }}</span> {{ text[Math.floor(Math.random() * text.length)]
      }}<span class="inline-block animate-blink">_</span>
    </p>
  </div>
</template>
