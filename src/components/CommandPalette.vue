<script setup lang="ts">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const show = ref(false)
const input = ref<HTMLInputElement | null>(null)
const commandPalette = useTemplateRef<HTMLElement>('commandPalette')
const { activate, deactivate } = useFocusTrap(commandPalette)
const query = ref('')
const router = useRouter()

const items = [
  { name: 'home', to: '/' },
  { name: 'about', to: '/about' },
  { name: 'projects', to: '/projects' },
  { name: 'themes', to: '/themes' },
]

const filteredItems = computed(() => items.filter(item => item.name.toLowerCase().includes(query.value.toLowerCase())))

function navigate(to: string) {
  show.value = false
  router.push(to)
}

onKeyStroke(['Escape', 'k'], (e) => {
  if (e.key.toLowerCase() === 'k' && !e.metaKey) {
    return
  }

  e.preventDefault()

  show.value = !show.value

  if (show.value) {
    query.value = ''
    nextTick(() => input.value?.focus())
  }
}, { dedupe: true })

onClickOutside(commandPalette, () => show.value = false)

watch(show, (val) => {
  if (val) {
    nextTick(() => {
      activate()
      input.value?.focus()
    })
  }
  else {
    deactivate()
  }
})
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="fixed inset-0 bg-black/30 z-50 flex items-start justify-center">
      <div
        ref="commandPalette"
        class="bg-theme-bg rounded-lg shadow-lg max-w-lg w-full mt-32"
      >
        <input
          ref="input"
          v-model="query"
          class="w-full px-4 py-2 text-theme-main text-xl rounded placeholder-theme-main/50 focus:outline-none"
          placeholder="Search..."
        >
        <ul class="">
          <li
            v-for="(item, index) in filteredItems"
            :key="item.name"
            class="text-theme-accent hover:bg-theme-main hover:text-theme-bg"
          >
            <button
              class="w-full h-full px-3 p-2 focus:outline-none focus:bg-theme-main focus:text-theme-bg hover:cursor-pointer text-left"
              :class="{ 'rounded-b-lg': index === filteredItems.length - 1 }"
              @click="navigate(item.to)"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
