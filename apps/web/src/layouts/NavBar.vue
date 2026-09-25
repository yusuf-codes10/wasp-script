<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

const links = [
  { name: 'home', path: '/' },
  { name: 'challenges', path: '/challenges' },
  { name: 'leaderboard', path: '/leaderboard' },
  { name: 'dashboard', path: '/dashboard' },
];
</script>

<template>
  <nav class="bg-[#0d0d0d] border-b border-[#1e1e1e] px-6 h-14 flex items-center justify-between">

    <!-- logo -->
    <RouterLink to="/" class="flex items-center gap-2 no-underline">
      <div class="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
        <i class="fa-solid fa-bolt text-black text-xs" />
      </div>
      <span class="text-[15px] font-semibold text-[#F0F0F0] tracking-tight">
        wasp<span class="text-primary">script</span>
      </span>
    </RouterLink>

    <!-- links -->
    <div class="flex items-center gap-0.5">
      <RouterLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="text-[13px] text-[#555] px-3 py-1.5 rounded-md transition-all duration-150 hover:text-[#F0F0F0] hover:bg-[#1a1a1a]"
        :class="{ 'text-[#F0F0F0] bg-[#1a1a1a]': route.path === link.path }"
      >
        {{ link.name }}
      </RouterLink>
    </div>

    <!-- right side -->
    <div class="flex items-center gap-2.5">
      <button class="text-xs text-[#555] border border-[#2a2a2a] px-3.5 py-1.5 rounded-md hover:text-[#F0F0F0] hover:border-[#444] transition-all duration-150">
        sign in
      </button>
      <div class="w h rounded-full bg-[#1e1a00] border border-[#3a3000] flex items-center justify-center text-[11px] text-primary font-semibold cursor-pointer">
        YK
      </div>
    </div>

  </nav>
</template>