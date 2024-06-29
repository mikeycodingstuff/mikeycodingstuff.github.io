<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
});
</script>

<template>
  <h1 class="text-5xl text-theme-main">{{ msg }}</h1>
</template>
