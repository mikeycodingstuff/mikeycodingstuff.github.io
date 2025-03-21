<script setup lang="ts">
const props = defineProps({
  prompt: {
    type: String,
    default: '>',
  },
  messages: {
    type: Array,
    required: true,
  },
  cursor: {
    type: String,
    default: '_',
  },
  typeMinSpeed: {
    type: Number,
    default: 60,
  },
  typeMaxSpeed: {
    type: Number,
    default: 150,
  },
  deleteMinSpeed: {
    type: Number,
    default: 50,
  },
  deleteMaxSpeed: {
    type: Number,
    default: 100,
  },
  deletePause: {
    type: Number,
    default: 2000,
  },
  typePause: {
    type: Number,
    default: 1000,
  },
})

const currentMessage = ref('')
const currentIndex = ref(0)
const messagesArrayIndex = ref(0)
const isDeleting = ref(false)
let shuffledMessages = []

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function randomSpeed(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function typeWriter() {
  const message = shuffledMessages[messagesArrayIndex.value]

  if (!isDeleting.value) {
    if (currentIndex.value < message.length) {
      currentMessage.value += message[currentIndex.value]
      currentIndex.value++
      setTimeout(typeWriter, randomSpeed(props.typeMinSpeed, props.typeMaxSpeed))
    }
    else {
      isDeleting.value = true
      setTimeout(typeWriter, props.deletePause)
    }
  }
  else {
    if (currentIndex.value > 0) {
      currentMessage.value = message.substring(0, currentIndex.value - 1)
      currentIndex.value--
      setTimeout(typeWriter, randomSpeed(props.deleteMinSpeed, props.deleteMaxSpeed))
    }
    else {
      isDeleting.value = false
      messagesArrayIndex.value = (messagesArrayIndex.value + 1) % shuffledMessages.length
      setTimeout(typeWriter, props.typePause)
    }
  }
}

onMounted(() => {
  shuffledMessages = shuffle([...props.messages])
  if (shuffledMessages.length !== 0) {
    typeWriter()
  }
})
</script>

<template>
  <div class="mt-3">
    <p class="text-xl md:text-2xl">
      <span>{{ prompt }}</span>
      {{ currentMessage }}<span class="inline-block animate-blink">{{ props.cursor }}</span>
    </p>
  </div>
</template>
