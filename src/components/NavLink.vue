<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

const isUsingKeyboard = ref(false)
const { pressed } = useMousePressed()

onKeyStroke(['Tab', 'Shift'], () => (isUsingKeyboard.value = true))

watch(pressed, () => (isUsingKeyboard.value = false))
</script>

<template>
  <div class="p-2 text-theme-main">
    <NuxtLink
      :to="to"
      class="rounded-sm p-1 text-4xl md:text-3xl lg:text-4xl hover:text-theme-accent focus:outline-hidden underline-offset-4 decoration-4 transition duration-300" :class="[
        isUsingKeyboard ? 'focus:ring-4 focus:ring-theme-main' : '',
      ]"
      active-class="text-theme-accent"
    >
      {{ name }}
    </NuxtLink>
  </div>
</template>
