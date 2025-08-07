
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

    <!-- 左上角历史记录按钮 -->
    <div class="fixed top-6 left-6 z-20">
      <button
        class="px-4 py-2 text-sm font-medium bg-white/70 backdrop-blur-lg border border-white/40 rounded-lg text-gray-800 hover:bg-white/85 transition-all duration-300 shadow-xl flex items-center gap-2 backdrop-saturate-150 hover:shadow-2xl drop-shadow-sm"
        @click="showHistory = true"
      >
        📚 历史记录
      </button>
    </div>

    <!-- 右上角返回按钮 -->
    <div class="fixed top-6 right-6 z-20">
      <NuxtLink to="/">
        <button class="px-4 py-2 text-sm font-medium bg-white/70 backdrop-blur-lg border border-white/40 rounded-lg text-gray-800 hover:bg-white/85 transition-all duration-300 shadow-xl flex items-center gap-2 backdrop-saturate-150 hover:shadow-2xl drop-shadow-sm">
          🏠 返回首页
        </button>
      </NuxtLink>
    </div>

    <!-- 历史记录对话框 -->
    <div
      v-if="showHistory"
      class="fixed inset-0 z-30 flex items-center justify-center p-4"
      @click.self="showHistory = false"
    >
      <div class="bg-black/50 absolute inset-0" @click="showHistory = false" />
      <div class="bg-white/60 backdrop-blur-xl rounded-2xl p-6 max-w-4xl w-full h-[80vh] shadow-2xl border border-white/15 relative flex flex-col backdrop-saturate-150">
        <div class="flex justify-between items-center mb-6 flex-shrink-0">
          <h2 class="text-2xl font-bold text-gray-800">📚 故事历史记录</h2>
          <button
            class="text-gray-500 hover:text-gray-700 text-xl font-bold"
            @click="showHistory = false"
          >
            ✕
          </button>
        </div>

        <div class="flex gap-6 flex-1 min-h-0">
          <!-- 历史列表 -->
          <div class="flex-1 overflow-y-auto">
            <div v-if="storyHistory.length === 0" class="text-center text-gray-500 py-8">
              还没有历史记录
            </div>
            <div v-else class="space-y-2">
              <div
                v-for="(item, index) in storyHistory"
                :key="item.scene.id"
                class="p-4 bg-white/25 hover:bg-white/50 backdrop-blur-sm rounded-lg cursor-pointer transition-all duration-200 border border-white/20 hover:border-white/40 hover:scale-[1.02] shadow-sm"
                @mouseenter="previewScene = item.scene"
                @mouseleave="previewScene = null"
                @click="confirmGoToHistory(index)"
              >
                <div class="font-medium text-gray-800">
                  {{ item.scene.id === 'start' ? '🚀 故事开始' : `第 ${index + 1} 章` }}
                </div>
                <div class="text-sm text-gray-600 truncate">
                  {{ getScenePreview(item.scene.text) }}
                </div>
                <div v-if="item.choice" class="text-xs text-blue-600 mt-1">
                  选择：{{ item.choice }}
                </div>
                <div class="text-xs text-gray-400 mt-1">
                  {{ formatTime(item.timestamp) }}
                </div>
              </div>
            </div>
          </div>

          <!-- 预览面板 -->
          <div class="flex-1 border-l border-gray-200 pl-6 flex flex-col min-h-0">
            <h3 class="text-lg font-bold text-gray-800 mb-4 flex-shrink-0">预览</h3>
            <div class="flex-1 min-h-0">
              <div v-if="previewScene" class="h-full overflow-y-auto">
                <div
                  v-if="previewScene.image"
                  class="w-full h-32 bg-cover bg-center rounded-lg mb-4 flex-shrink-0"
                  :style="`background-image: url('${previewScene.image}')`"
                />
                <!-- eslint-disable vue/no-v-html -->
                <div
                  class="prose prose-sm max-w-none text-gray-700"
                  v-html="convertMarkdown(previewScene.text)"
                />
              </div>
              <div v-else class="flex items-center justify-center h-full text-gray-400">
                将鼠标悬停在历史记录上查看预览
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 跳转确认对话框 -->
    <div
      v-if="showConfirm"
      class="fixed inset-0 z-40 flex items-center justify-center p-4"
    >
      <div class="bg-black/50 absolute inset-0" />
      <div class="bg-white/95 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full shadow-2xl border border-white/30 relative">
        <h3 class="text-lg font-bold text-gray-800 mb-4">确认跳转</h3>
        <p class="text-gray-600 mb-6">
          跳转到此场景将删除这之后的所有历史记录，确定要继续吗？
        </p>
        <div class="flex gap-3 justify-end">
          <button
            class="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            @click="showConfirm = false"
          >
            取消
          </button>
          <button
            class="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            @click="executeGoToHistory"
          >
            确定
          </button>
        </div>
      </div>
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
import { computed, ref, inject, watch } from 'vue'
import { storyData } from '~/story'
import type { StoryScene, StoryHistoryItem } from '~/story'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

// 注入历史记录相关函数
const storyHistory = inject<Ref<StoryHistoryItem[]>>('storyHistory', ref([]))
const addToHistory = inject<(scene: StoryScene, choice?: string) => void>('addToHistory', () => {})
const goToHistoryScene = inject<(index: number) => void>('goToHistoryScene', () => {})

// 组件状态
const showHistory = ref(false)
const showConfirm = ref(false)
const previewScene = ref<StoryScene | null>(null)
const pendingHistoryIndex = ref(-1)

const scene = computed(() => {
  return storyData.find((item) => item.id === id)
})

// 监听场景变化，自动添加到历史记录
watch(scene, (newScene) => {
  if (newScene) {
    addToHistory(newScene)
  }
}, { immediate: true })

function goTo(nextId: string) {
  // 获取当前选择的选项文本
  const currentChoice = scene.value?.options?.find(opt => opt.nextId === nextId)?.label

  // 更新当前历史记录的选择
  if (scene.value && currentChoice) {
    const currentIndex = storyHistory.value.findIndex(item => item.scene.id === scene.value!.id)
    if (currentIndex >= 0 && storyHistory.value[currentIndex]) {
      storyHistory.value[currentIndex].choice = currentChoice
    }
  }

  router.push({ path: `/story/${nextId}` })
}

// 确认跳转到历史场景
function confirmGoToHistory(index: number) {
  pendingHistoryIndex.value = index
  showConfirm.value = true
}

// 执行跳转到历史场景
function executeGoToHistory() {
  if (pendingHistoryIndex.value >= 0) {
    goToHistoryScene(pendingHistoryIndex.value)
  }
  showConfirm.value = false
  showHistory.value = false
}

// 获取场景预览文本
function getScenePreview(text: string): string {
  // 移除 markdown 标记并截取前50个字符
  const plainText = text.replace(/[#*>]/g, '').replace(/\n/g, ' ').trim()
  return plainText.length > 50 ? plainText.substring(0, 50) + '...' : plainText
}

// 格式化时间
function formatTime(timestamp: number): string {
  const date = new Date(timestamp)
  return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
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
