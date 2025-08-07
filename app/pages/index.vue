
<template>
  <div
    class="min-h-screen bg-contain bg-top bg-no-repeat relative w-full bg-black"
    style="background-image: url('/story/cover.png'); background-size: 100% auto;"
  >
    <!-- 背景遮罩层 -->
    <div class="absolute inset-0 bg-black/40" />

    <!-- 内容层 -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 class="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl mb-8 tracking-wide">
        外星人互动冒险
      </h1>

      <div class="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed drop-shadow-lg bg-gradient-to-r from-blue-300 via-green-300 to-yellow-300 bg-clip-text text-transparent">
        欢迎来到互动故事游戏！<br>
        在这里，你的每个选择都将影响故事走向。
      </div>

      <NuxtLink to="/story/start">
        <button class="px-12 py-6 text-3xl font-bold shadow-2xl animate-bounce hover:scale-105 transition-all duration-200 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-white hover:bg-white/30">
          🚀 开始冒险
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// 页面设置
</script>
