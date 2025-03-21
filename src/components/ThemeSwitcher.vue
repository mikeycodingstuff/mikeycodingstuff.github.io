<script setup lang="ts">
import { unKebab } from '@/helpers'
import { themes } from '@/themes'
</script>

<template>
  <div class="rounded-sm grid gap-10 place-items-center">
    <ColorScheme placeholder="...loading" class="text-nowrap text-2xl text-center lowercase">
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
