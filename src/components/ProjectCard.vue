<script setup lang="ts">
defineProps({
  projectName: {
    type: String,
    required: true,
  },
  screenshot: {
    type: [String, null],
    default: null,
  },
  alt: {
    type: [String, null],
    default: null,
  },
  githubLink: {
    type: String,
    required: true,
  },
  liveLink: {
    type: [String, null],
    default: null,
  },
})
</script>

<template>
  <div class="max-w-xl p-6 bg-theme-main rounded-xl flex flex-col gap-6 text-theme-bg-alt">
    <h1 class="text-3xl text-center capitalize">
      {{ projectName }}
    </h1>
    <div>
      <img v-if="screenshot" :src="screenshot" :alt="alt" class="rounded-lg">
      <div
        v-else
        class="bg-theme-bg rounded-lg w-full flex justify-center items-center aspect-3/2 text-theme-text"
      >
        {{ projectName }}
        screenshot coming soon!
      </div>
    </div>
    <div class="p-2 rounded-lg bg-theme-bg-alt text-theme-text flex flex-col grow justify-between">
      <div class="text-justify p-3">
        <slot />
      </div>
      <div class="text-2xl p-5 self-end">
        <InternalLink :to="githubLink" name="GitHub" />
        <span v-if="liveLink" class="text-theme-accent"> | </span>
        <InternalLink v-if="liveLink" :to="liveLink" name="Live" />
      </div>
    </div>
  </div>
</template>
