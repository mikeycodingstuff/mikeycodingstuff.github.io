<script setup lang="ts">
import { ref, watch } from 'vue';
import { onKeyStroke, useMousePressed } from '@vueuse/core';

defineProps({
  link: String,
  name: String,
});

const isUsingKeyboard = ref(false);
const { pressed } = useMousePressed();

onKeyStroke(['Tab', 'Shift'], () => (isUsingKeyboard.value = true));

watch(pressed, () => (isUsingKeyboard.value = false));
</script>

<template>
  <div class="p-2 text-theme-main">
    <router-link
      :to="link"
      :class="[
        'rounded p-1 text-4xl md:text-2xl lg:text-4xl hover:text-theme-accent focus:outline-none underline-offset-4 decoration-4 transition duration-300',
        isUsingKeyboard ? 'focus:ring-4 focus:ring-theme-main' : '',
      ]"
      activeClass="text-theme-accent"
      >{{ name }}
    </router-link>
  </div>
</template>
