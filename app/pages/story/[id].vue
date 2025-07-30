
<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
    <UCard class="w-full max-w-xl shadow-2xl border-2 border-blue-200 bg-white/90">
      <div v-if="scene">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="text-2xl font-bold mb-6 text-green-700 text-center drop-shadow" v-html="scene.text"/>
        <div v-if="scene.options && scene.options.length">
          <div class="flex flex-col gap-4 items-center">
            <UButton
              v-for="option in scene.options"
              :key="option.nextId"
              size="xl"
              color="primary"
              class="w-full max-w-xs text-lg font-bold shadow-md hover:scale-105 transition-transform"
              @click="goTo(option.nextId)"
            >
              {{ option.label }}
            </UButton>
          </div>
        </div>
        <div v-else class="mt-8">
          <UAlert color="success" variant="soft" class="text-center text-xl">
            故事结束 🎉
          </UAlert>
        </div>
      </div>
      <div v-else class="mt-8">
        <UAlert color="error" variant="soft" class="text-center">
          未找到该场景
        </UAlert>
      </div>
      <div class="mt-8 flex justify-center">
        <NuxtLink to="/">
          <UButton color="secondary" variant="outline">返回首页</UButton>
        </NuxtLink>
      </div>
    </UCard>
  </div>
</template>


<script setup lang="ts">
import { UCard, UButton, UAlert } from '#components'
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

type StoryOption = { label: string, nextId: string }
type StoryScene = { id: string, text: string, options?: StoryOption[] }
const story = ref<StoryScene[]>([])

async function loadStory() {
  if (import.meta.server) return
  const res = await fetch('/story/story.json')
  story.value = await res.json()
}
onMounted(loadStory)

const scene = computed(() => {
  return story.value.find((item) => item.id === id)
})

function goTo(nextId: string) {
  router.push({ path: `/story/${nextId}` })
}
</script>
