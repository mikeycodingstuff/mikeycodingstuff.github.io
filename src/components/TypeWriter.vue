<script setup>
defineProps({
  prompt: String,
  text: Array,
});
</script>

<template>
  <div>
    <p class="text-2xl">
      <span class="">{{ prompt }}</span>
      {{ text[Math.floor(Math.random() * text.length)] }}
      <span class="inline-block animate-blink">_</span>
    </p>
  </div>
</template>
