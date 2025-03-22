<script setup lang="ts">
import { unKebab } from '@/helpers'
import { themes } from '@/themes'

const colorMode = useColorMode()
</script>

<template>
  <div class="grid gap-3 justify-center items-center p-6 bg-theme-bg-alt rounded-lg min-w-3xs min-h-52">
    <ColorScheme class="text-nowrap text-2xl text-center lowercase">
      <template #placeholder>
        <div class="flex justify-center items-center">
          <Spinner />
        </div>
      </template>

      <p class="text-nowrap text-2xl text-center lowercase">
        {{ unKebab(colorMode.value) }}
      </p>

      <div class="flex justify-center">
        <select
          id="theme-selector"
          v-model="colorMode.preference"
          class="p-2 rounded-sm bg-theme-main text-theme-bg border-2 border-transparent focus:border-theme-bg focus:outline-hidden focus:ring-4 focus:ring-theme-main transition ease-in-out"
        >
          <option v-for="(theme, key, index) in themes" :key="index" :value="theme">
            {{ theme }}
          </option>
        </select>
      </div>
      <ThemeColorsDisplay />
    </ColorScheme>
  </div>
</template>
