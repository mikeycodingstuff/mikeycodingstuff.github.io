<script setup>
defineProps({
  prompt: String,
  messages: Array,
});
</script>

<template>
  <div>
    <p class="text-2xl">
      <span class="">{{ prompt }}</span>
      {{ messages[Math.floor(Math.random() * messages.length)]
      }}<span class="inline-block animate-blink">_</span>
    </p>
  </div>
</template>
