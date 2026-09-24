<script setup lang="ts">
import type { Challenge } from "@shared/types/challenge";
import { useMarkdown } from "@/composables/useMarkdown";
import { splitText } from "@/utils/splitText";

const props = defineProps<{
  challenge: Challenge;
}>();

const difficultyClass: Record<string, string> = {
  easy: "bg-[#0f2a1a] text-[#4CAF72] border border-[#1a4a2a]",
  medium: "bg-[#2a1a00] text-[#E6A800] border border-[#4a3000]",
  hard: "bg-[#2a0f0f] text-[#E05252] border border-[#4a1a1a]",
  legendary: "bg-[#1a0a2a] text-[#a855f7] border border-[#3a1a4a]",
};

const description = useMarkdown(splitText(props.challenge.description));
</script>

<template>
  <div
    class="group relative bg-[#111111] border border-[#2a2a2a] rounded-xl px-6 py-5 my-1 mx-4 cursor-pointer overflow-hidden hover:border-primary hover:-translate-y-0.5 transition-all duration-150"
  >
    <!-- yellow top bar on hover -->
    <div
      class="absolute top-0 left-0 right-0 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-150"
    />

    <!-- top row -->
    <div class="flex items-center justify-between mb-3">
      <div class="flex gap-2">
        <span
          :class="difficultyClass[props.challenge.difficulty]"
          class="text-[11px] font-medium px-3 py-0.5 rounded-full"
        >
          {{ props.challenge.difficulty }}
        </span>
        <span
          class="text-[11px] font-medium px-3 py-0.5 rounded-full bg-[#1e1a00] text-primary border border-[#3a3000]"
        >
          {{ props.challenge.category }}
        </span>
      </div>
      <span class="text-xs text-[#444] font-mono"
        >#{{ String(props.challenge.id).padStart(2, "0") }}</span
      >
    </div>

    <!-- title -->
    <h3 class="text-base font-medium text-[#F0F0F0] mb-1 leading-snug">
      {{ props.challenge.title }}
    </h3>

    <!-- description -->
    <div
      class="prose prose-invert prose-waspscript max-w-none"
      v-html="description"
    />
    <!-- <p class="text-sm text-[#666] leading-relaxed mb-4 line-clamp-2">
      {{ props.challenge.description }}
    </p> -->

    <!-- footer -->
    <!-- ! saved for later for the junction table -->
    <div
      class="flex items-center justify-between border-t border-[#1e1e1e] pt-3"
    >
      <div class="flex items-center gap-2 text-xs text-[#555]">
        <span
          class="w-1.5 h-1.5 rounded-full"
          :class="props.challenge ? 'bg-[#4CAF72]' : 'bg-[#333]'"
        />
        {{ props.challenge ? "completed" : "not started" }}
      </div>
      <i class="fa-solid fa-arrow-right-long text-[#333] text-lg group-hover:text-primary group-hover:translate-x-1 transition-all duration-150"></i>
    </div>
  </div>
</template>
