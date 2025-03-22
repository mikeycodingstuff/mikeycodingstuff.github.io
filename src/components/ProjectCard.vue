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
  <div class="max-w-xl p-4 rounded-xl grid gap-5 items-center bg-theme-bg-alt lg:max-w-6xl lg:grid-cols-5 xl:max-w-7xl">
    <h1 class="text-3xl text-center capitalize text-theme-main lg:hidden">
      {{ projectName }}
    </h1>

    <!-- screenshot/placeholder -->
    <div class="w-full lg:col-span-2 lg:p-3">
      <img v-if="screenshot" :src="screenshot" :alt="alt" class="rounded-lg w-full">
      <div
        v-else
        class="rounded-lg lg:w-full flex justify-center items-center aspect-3/2 bg-theme-main text-theme-bg"
      >
        {{ projectName }}
        screenshot coming soon!
      </div>
    </div>

    <div class="p-2 text-theme-text w-full flex flex-col justify-between lg:col-span-3 lg:min-w-xl">
      <h1 class="hidden mb-4 text-left text-3xl capitalize text-theme-main lg:block">
        {{ projectName }}
      </h1>

      <div class="text-left">
        <slot />
      </div>

      <!-- links -->
      <div class="text-2xl flex gap-2 mt-4 w-full items-center justify-end">
        <InternalLink :to="githubLink" name="GitHub" />
        <span v-if="liveLink" class="text-theme-accent"> | </span>
        <InternalLink v-if="liveLink" :to="liveLink" name="Live" />
      </div>
    </div>
  </div>
</template>
