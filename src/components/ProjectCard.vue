<script setup lang="ts">
defineProps({
  projectName: {
    type: String,
    required: true,
  },
  screenshot: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: null,
  },
  githubLink: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="max-w-xl lg:max-w-7xl p-4 bg-theme-bg-alt rounded-xl flex flex-col lg:flex-row gap-6">
    <h1 class="lg:hidden text-3xl text-center capitalize text-theme-main">
      {{ projectName }}
    </h1>
    <div>
      <img v-if="screenshot" :src="screenshot" :alt="alt" class="rounded-lg mx-auto w-md">
      <div
        v-else
        class="bg-theme-main rounded-lg lg:w-full flex justify-center items-center w-24 h-24 aspect-3/2 text-theme-bg"
      >
        {{ projectName }}
        screenshot coming soon!
      </div>
    </div>
    <div class="p-2 lg:max-w-2xl text-theme-text flex flex-col grow justify-between">
      <h1 class="hidden lg:block text-3xl text-center capitalize text-theme-main">
        {{ projectName }}
      </h1>
      <div class="text-left">
        <slot />
      </div>
      <div class="text-2xl pt-2 self-end">
        <InternalLink :to="githubLink" name="GitHub" />
        <span v-if="liveLink" class="text-theme-accent"> | </span>
        <InternalLink v-if="liveLink" :to="liveLink" name="Live" />
      </div>
    </div>
  </div>
</template>
