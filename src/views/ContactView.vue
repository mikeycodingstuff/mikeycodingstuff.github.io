<script setup lang="ts">
import ExternalLink from '@/components/nav/ExternalLink.vue';
import GitHubIcon from '@/components/icons/GitHubIcon.vue';
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue';
</script>

<template>
  <div>
    <div class="grid place-items-center gap-12">
      <div class="text-2xl max-w-2xl text-center">
        <p>
          The best way to contact me is via
          <external-link link="mailto:mikeyinguk+jobs@gmail.com">e-mail</external-link>, however you
          can also reach me via these links.
        </p>
      </div>

      <div class="flex gap-x-12 text-2xl">
        <external-link
          link="https://github.com/mikeycodingstuff"
          isContactLink
          class="focus:ring-theme-main"
        >
          <div class="group flex gap-3 items-center rounded text-theme-main p-1">
            <git-hub-icon class="group-hover:fill-theme-accent" />
            <p class="group-hover:text-theme-accent transition-colors duration-300">GitHub</p>
          </div>
        </external-link>

        <external-link
          link="https://www.linkedin.com/in/mikeyying"
          isContactLink
          class="focus:ring-theme-main"
        >
          <div class="group flex gap-3 items-center rounded text-theme-main p-1">
            <linked-in-icon class="group-hover:fill-theme-accent" />
            <p class="group-hover:text-theme-accent transition-colors duration-300">LinkedIn</p>
          </div>
        </external-link>
      </div>
    </div>
  </div>
</template>
