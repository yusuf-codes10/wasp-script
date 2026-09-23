<script setup lang="ts">
import type { Challenge } from "@shared/types/challenge";

const props = defineProps<{
  challenge: Challenge;
}>();

const difficultyClass: Record<string, string> = {
  easy: "bg-[#0f2a1a] text-[#4CAF72] border border-[#1a4a2a]",
  medium: "bg-[#2a1a00] text-[#E6A800] border border-[#4a3000]",
  hard: "bg-[#2a0f0f] text-[#E05252] border border-[#4a1a1a]",
  legendary: "bg-[#1a0a2a] text-[#a855f7] border border-[#3a1a4a]",
};
</script>

<template>
  <div class="bg-foreground m-2 text-accent px-4 py-2">
    <!-- card -->
    <div>
      <!-- labels -->
      <div class="flex justify-between">
        <div class="flex gap-2">
          <span class="bg-chart-2 p-1 rounded-2xl">{{
            props.challenge.difficulty
          }}</span>
          <span class="bg-chart-3 p-1 rounded-3xl">{{
            props.challenge.category
          }}</span>
        </div>
        <div>
          <p>#{{ props.challenge.id }}</p>
        </div>
      </div>
      <h1 class="text-2xl">{{ props.challenge.title }}</h1>
      <p class="text-muted">{{ props.challenge.description }}</p>
    </div>
  </div>
</template>
