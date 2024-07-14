<script setup>
import { ref, watch } from 'vue';
import { onKeyStroke, useMousePressed } from '@vueuse/core';

defineProps({
  link: String,
  name: String,
});

const isUsingKeyboard = ref(false);

onKeyStroke(['Tab', 'Shift'], () => {
  isUsingKeyboard.value = true;
});

const { pressed } = useMousePressed();

watch(pressed, (newPressed) => {
  if (newPressed) {
    isUsingKeyboard.value = false;
  }
});
</script>

<template>
  <div class="p-2">
    <router-link
      :to="link"
      :class="[
        'rounded p-1 text-2xl text-theme-main hover:text-theme-accent hover:decoration-theme-accent focus:outline-none underline-offset-4 decoration-4 decoration-theme-main transition duration-300',
        isUsingKeyboard ? 'focus:ring-4 focus:ring-theme-main' : '',
      ]"
      activeClass="underline"
      >{{ name }}
    </router-link>
  </div>
</template>
