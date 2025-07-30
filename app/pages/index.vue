
<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
    <UCard class="w-full max-w-md shadow-2xl border-2 border-blue-300 bg-white/80">
      <div class="flex flex-col items-center gap-6 py-6">
        <UAvatar size="lg" src="/favicon.ico" alt="外星人" class="shadow-lg border-2 border-green-400" />
        <h1 class="text-4xl font-extrabold text-green-700 drop-shadow mb-2 tracking-wide">外星人互动冒险</h1>
        <div class="text-gray-600 text-center mb-4">
          欢迎来到互动故事游戏！<br>在这里，你的每个选择都将影响故事走向。
        </div>
        <NuxtLink to="/story/start">
          <UButton size="xl" color="primary" class="px-10 py-4 text-2xl font-bold shadow-lg animate-bounce">
            🚀 开始冒险
          </UButton>
        </NuxtLink>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
// 使用 Nuxt UI 组件
import { UCard, UButton, UAvatar } from '#components'
</script>
