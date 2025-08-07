
<template>
  <div class="min-h-screen bg-black relative">
    <!-- 全屏背景图片 -->
    <div
      v-if="scene?.image"
      class="fixed inset-0 bg-cover bg-center bg-no-repeat"
      :style="`background-image: url('${scene.image}')`"
    />

    <!-- 没有图片时的默认背景 -->
    <div
      v-else
      class="fixed inset-0 bg-black"
    />

    <!-- 右上角返回按钮 -->
    <div class="fixed top-6 right-6 z-20">
      <NuxtLink to="/">
        <button class="px-4 py-2 text-sm font-medium bg-white/70 backdrop-blur-lg border border-white/40 rounded-lg text-gray-800 hover:bg-white/85 transition-all duration-300 shadow-xl flex items-center gap-2 backdrop-saturate-150 hover:shadow-2xl drop-shadow-sm">
          🏠 返回首页
        </button>
      </NuxtLink>
    </div>

    <!-- 内容层 -->
    <div class="relative z-10 min-h-screen flex flex-col justify-center p-6">
      <div class="w-full max-w-4xl mx-auto">
        <div v-if="scene">
          <!-- 大结局标题 -->
          <div v-if="scene.options !== undefined && scene.options.length === 0" class="text-center mb-8">
            <div class="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/30 backdrop-saturate-150">
              <h1 class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-700 via-red-700 to-pink-700 bg-clip-text text-transparent flex items-center justify-center gap-4 mb-4 drop-shadow-sm">
                🚀 大结局 🎭
              </h1>
              <div class="w-32 h-1 bg-gradient-to-r from-yellow-600 to-pink-600 mx-auto rounded-full shadow-lg" />
            </div>
          </div>

          <!-- 故事内容卡片 -->
          <div class="bg-white/80 backdrop-blur-lg rounded-2xl p-8 mb-8 shadow-2xl border border-white/30 backdrop-saturate-150">
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="prose prose-lg max-w-none text-gray-800 drop-shadow-sm"
              v-html="convertMarkdown(scene.text)"
            />
          </div>

          <!-- 选项按钮 -->
          <div v-if="scene.options && scene.options.length > 0" class="space-y-3">
            <button
              v-for="option in scene.options"
              :key="option.nextId"
              class="w-full p-4 text-lg font-medium bg-white/70 backdrop-blur-lg border border-white/40 rounded-xl text-gray-800 hover:bg-white/85 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-saturate-150 hover:shadow-2xl drop-shadow-sm"
              @click="goTo(option.nextId)"
            >
              {{ option.label }}
            </button>
          </div>

          <!-- 故事结束提示 -->
          <div v-else-if="scene.options !== undefined && scene.options.length === 0 && scene.id !== 'end_safe_return'" class="text-center">
            <div class="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30 backdrop-saturate-150">
              <div class="text-2xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent drop-shadow-sm">
                🎉 故事结束 🎉
              </div>
            </div>
          </div>
        </div>

        <!-- 场景未找到 -->
        <div v-else class="text-center">
          <div class="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30 backdrop-saturate-150">
            <div class="text-2xl font-bold text-red-700 drop-shadow-sm">
              ⚠️ 未找到该场景
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
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

// 游戏风格的 Markdown 转换函数
function convertMarkdown(text: string): string {
  let html = text

  // 标题转换 - 使用深色系
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-yellow-800 mb-4 mt-6 drop-shadow-sm">$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 mt-8 drop-shadow-sm">$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold bg-gradient-to-r from-green-800 to-blue-800 bg-clip-text text-transparent mb-8 text-center drop-shadow-sm">$1</h1>')

  // 粗体和斜体 - 使用深色系
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-yellow-800 drop-shadow-sm">$1</strong>')
  html = html.replace(/\*(.*?)\*/g, '<em class="italic text-blue-800 drop-shadow-sm">$1</em>')

  // 引用块 - 适应深色文字
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-cyan-600 pl-6 py-3 bg-gray-100/60 text-cyan-800 italic my-6 rounded-r-xl backdrop-blur-sm">$1</blockquote>')

  // 换行处理 - 使用深色文字
  html = html.replace(/\n\n/g, '</p><p class="mb-4 text-gray-800 leading-relaxed drop-shadow-sm">')
  html = html.replace(/\n/g, '<br>')

  // 包装段落 - 使用深色文字
  if (!html.startsWith('<h1') && !html.startsWith('<h2') && !html.startsWith('<h3')) {
    html = '<p class="mb-4 text-gray-800 leading-relaxed text-lg drop-shadow-sm">' + html + '</p>'
  }

  return html
}
</script>
