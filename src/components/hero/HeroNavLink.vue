<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  link: String,
  name: String
});

const isUsingKeyboard = ref(false);

const handleKeydown = (e) => {
  if (e.key === 'Tab' || e.key === 'Shift') {
    isUsingKeyboard.value = true;
  }
};

const handleMousedown = () => {
  isUsingKeyboard.value = false;
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('mousedown', handleMousedown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('mousedown', handleMousedown);
});
</script>

<template>
  <div class="p-2">
    <router-link
      :to="link"
      :class="[
        'rounded p-1 text-2xl hover:text-theme-main focus:outline-none transition-shadow duration-300 underline-offset-4 decoration-4 decoration-theme-main',
        isUsingKeyboard ? 'focus:border-theme-bg-primary focus:ring-4 focus:ring-theme-main' : ''
      ]"
      activeClass="underline"
      >{{ name }}</router-link
    >
  </div>
</template>
