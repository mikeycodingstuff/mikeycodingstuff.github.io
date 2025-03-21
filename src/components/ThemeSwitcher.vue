<script setup lang="ts">
import { unKebab } from '@/helpers'
import { themes } from '@/themes'
</script>

<template>
  <div class="rounded-sm grid gap-10 place-items-center">
    <ColorScheme class="text-nowrap text-2xl text-center lowercase">
      <template #placeholder>
        <div class="flex justify-center items-center">
          <svg class="animate-spin h-6 w-6 text-theme-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 00-8 8h4z" />
          </svg>
        </div>
      </template>

      <p class="text-nowrap text-2xl text-center lowercase">
        {{ unKebab($colorMode.preference) }}
      </p>
    </ColorScheme>

    <div>
      <select
        v-model="$colorMode.preference"
        class="p-2 rounded-sm bg-theme-main text-theme-bg border-2 border-transparent focus:border-theme-bg focus:outline-hidden focus:ring-4 focus:ring-theme-main transition ease-in-out"
      >
        <option v-for="(theme, key, index) in themes" :key="index" :value="theme">
          {{ theme }}
        </option>
      </select>
    </div>
  </div>
</template>
