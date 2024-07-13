<script setup lang="ts">
defineProps({
  link: String,
  contact: Boolean,
});
</script>

<template>
  <a
    :href="link"
    target="_blank"
    :class="[
      'rounded text-theme-accent hover:text-theme-accent-alt focus:outline-none focus:ring-4 focus:ring-theme-accent transition duration-300',
      contact ? 'flex gap-3 items-center' : '',
    ]"
    ><slot
  /></a>
</template>
