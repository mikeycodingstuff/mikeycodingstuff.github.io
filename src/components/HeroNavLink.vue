<script setup>
defineProps({
  link: String,
  name: String
});
</script>

<template>
  <div class="p-2">
    <router-link :to="link">{{ name }}</router-link>
  </div>
</template>
