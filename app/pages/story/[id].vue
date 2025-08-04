
<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
    <UCard class="w-full max-w-2xl lg:max-w-4xl xl:max-w-5xl shadow-2xl border-2 border-blue-200 bg-white/90">
      <div v-if="scene">
        <!-- 图片显示 -->
        <div v-if="scene.image" class="mb-6 rounded-lg overflow-hidden">
          <img
            :src="scene.image"
            :alt="getImageAlt(scene.text)"
            class="w-full"
            loading="lazy"
          >
        </div>

        <!-- Markdown 内容 -->
        <!-- eslint-disable vue/no-v-html -->
        <div
        class="prose prose-lg max-w-none mb-6 text-gray-800"
          v-html="convertMarkdown(scene.text)"
        />
        <div v-if="scene.options && scene.options.length">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <UButton
              v-for="option in scene.options"
              :key="option.nextId"
              size="xl"
              color="primary"
              class="w-full text-base md:text-lg font-bold shadow-md hover:scale-105 transition-transform p-4"
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
import { computed } from 'vue'
import { storyData } from '~/story'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

const scene = computed(() => {
  return storyData.find((item) => item.id === id)
})

function goTo(nextId: string) {
  router.push({ path: `/story/${nextId}` })
}

// 简单的 Markdown 转换函数
function convertMarkdown(text: string): string {
  let html = text

  // 标题转换
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-gray-800 mb-3 mt-4">$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-blue-700 mb-4 mt-6">$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-green-700 mb-6 text-center">$1</h1>')

  // 粗体和斜体
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
  html = html.replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>')

  // 引用块
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-blue-400 pl-4 py-2 bg-blue-50 text-gray-700 italic my-4 rounded-r-lg">$1</blockquote>')

  // 换行处理
  html = html.replace(/\n\n/g, '</p><p class="mb-4">')
  html = html.replace(/\n/g, '<br>')

  // 包装段落
  if (!html.startsWith('<h1') && !html.startsWith('<h2') && !html.startsWith('<h3')) {
    html = '<p class="mb-4">' + html + '</p>'
  }

  return html
}

// 生成图片的 alt 文本
function getImageAlt(text: string): string {
  // 提取第一行作为 alt 文本，去除 Markdown 格式
  const firstLine = text.split('\n')[0] || ''
  return firstLine.replace(/[#*>]/g, '').trim()
}
</script>
