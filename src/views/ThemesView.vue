<script setup lang="ts">
import ThemeSwitcher from '@/components/themes/ThemeSwitcher.vue';
import ThemeColorsDisplay from '@/components/themes/ThemeColorsDisplay.vue';
import ExternalLink from '@/components/nav/ExternalLink.vue';
</script>

<template>
  <div>
    <div class="grid place-items-center md:grid-cols-2 gap-12">
      <div class="text-2xl max-w-2xl">
        <p class="leading-normal text-pretty">
          Use this theme-switcher, or hit
          <span class="text-theme-accent-alt">`Esc`</span> to change the theme!
        </p>
        <br />
        <p class="leading-normal">
          Heavily inspired by
          <external-link link="https://monkeytype.com">monkeytype</external-link>.
        </p>
      </div>
      <div class="grid center p-6 bg-theme-bg-alt rounded-lg">
        <theme-switcher />
        <theme-colors-display class="p-4" />
      </div>
    </div>
  </div>
</template>
