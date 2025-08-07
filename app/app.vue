<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
import type { StoryScene } from '~/story'

// 历史记录类型
export type StoryHistoryItem = {
  scene: StoryScene
  timestamp: number
  choice?: string
}

// localStorage 键名
const STORY_HISTORY_KEY = 'nuxt-story-history'

// 从 localStorage 加载历史记录
function loadHistoryFromStorage(): StoryHistoryItem[] {
  if (typeof window === 'undefined') return []

  try {
    const stored = localStorage.getItem(STORY_HISTORY_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('加载历史记录失败:', error)
    return []
  }
}

// 保存历史记录到 localStorage
function saveHistoryToStorage(history: StoryHistoryItem[]) {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(STORY_HISTORY_KEY, JSON.stringify(history))
  } catch (error) {
    console.error('保存历史记录失败:', error)
  }
}

// 全局历史记录状态，初始化时从 localStorage 加载
const storyHistory = ref<StoryHistoryItem[]>(loadHistoryFromStorage())

// 监听历史记录变化，自动保存到 localStorage
watch(storyHistory, (newHistory) => {
  saveHistoryToStorage(newHistory)
}, { deep: true })

// 添加历史记录
function addToHistory(scene: StoryScene, choice?: string) {
  const historyItem: StoryHistoryItem = {
    scene,
    timestamp: Date.now(),
    choice
  }

  // 检查是否已存在该场景
  const existingIndex = storyHistory.value.findIndex(item => item.scene.id === scene.id)

  if (existingIndex >= 0) {
    // 如果场景已存在，删除该场景之后的所有记录（回到分支点）
    storyHistory.value = storyHistory.value.slice(0, existingIndex + 1)
  } else {
    // 添加新记录
    storyHistory.value.push(historyItem)
  }
}

// 跳转到历史场景
function goToHistoryScene(targetIndex: number) {
  if (targetIndex >= 0 && targetIndex < storyHistory.value.length) {
    // 删除目标场景之后的所有历史记录
    storyHistory.value = storyHistory.value.slice(0, targetIndex + 1)

    const targetScene = storyHistory.value[targetIndex]?.scene
    if (targetScene) {
      navigateTo(`/story/${targetScene.id}`)
    }
  }
}

// 清空历史记录
function clearHistory() {
  storyHistory.value = []
  // 同时清空 localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORY_HISTORY_KEY)
  }
}

// 提供给子组件使用
provide('storyHistory', storyHistory)
provide('addToHistory', addToHistory)
provide('goToHistoryScene', goToHistoryScene)
provide('clearHistory', clearHistory)
</script>
