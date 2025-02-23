<script setup lang="ts">
import ExternalLink from '@/components/nav/ExternalLink.vue';

defineProps({
  projectName: String,
  githubLink: String,
  liveLink: {
    type: [String, null],
    default: null,
  },
});
</script>

<template>
  <div class="max-w-2xl p-6 bg-theme-bg-alt rounded-xl grid gap-6">
    <h1 class="text-3xl text-center capitalize">{{ projectName }}</h1>
    <div class="bg-stone-500 rounded-lg min-h-52 flex justify-center items-center">{{ projectName }} screenshot here</div>
    <div class="p-2 rounded-lg bg-theme-main text-theme-bg">
      <div>
        <slot />
      </div>
      <div class="text-2xl p-3">
        <external-link :link="githubLink">GitHub</external-link>
        <span v-if="liveLink" class="text-theme-accent"> | </span>
        <external-link v-if="liveLink" :link="liveLink">Live</external-link>
      </div>
    </div>
  </div>
</template>
