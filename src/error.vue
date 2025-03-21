<script setup lang="ts">
const error = useError()
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center">
      <template v-if="error.statusCode === 404">
        <h1 class="text-6xl text-theme-main m-4">
          Not Found
        </h1>
        <p class="text-xl m-4">
          Oops, couldn't find that page! Time to head <Link to="/">
            home
          </Link>.
        </p>
      </template>
      <template v-else>
        <h1 class="text-6xl text-theme-main m-4">
          Oops
        </h1>
        <p class="text-xl m-4">
          <strong>{{ error.message }}</strong>
        </p>
        <p class="text-xl m-4">
          It looks like something broke.
        </p>
        <p class="text-xl m-4">
          Sorry about that.
        </p>
      </template>
    </div>
  </NuxtLayout>
</template>
