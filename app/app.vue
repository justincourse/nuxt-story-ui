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

// 全局历史记录状态
const storyHistory = ref<StoryHistoryItem[]>([])

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
}

// 提供给子组件使用
provide('storyHistory', storyHistory)
provide('addToHistory', addToHistory)
provide('goToHistoryScene', goToHistoryScene)
provide('clearHistory', clearHistory)
</script>
