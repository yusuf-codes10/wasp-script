<script setup lang="ts">
import type { Challenge, toDisplayChallenge } from "@shared/types/challenge";
import { useMarkdown } from "@/composables/useMarkdown";
import { splitText } from "@/utils/splitText";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{
  challenge: toDisplayChallenge;
}>();

const difficultyClass: Record<string, string> = {
  easy: "bg-[#0f2a1a] text-[#4CAF72] border border-[#1a4a2a]",
  medium: "bg-[#2a1a00] text-[#E6A800] border border-[#4a3000]",
  hard: "bg-[#2a0f0f] text-[#E05252] border border-[#4a1a1a]",
  legendary: "bg-[#1a0a2a] text-[#a855f7] border border-[#3a1a4a]",
};

const description = useMarkdown(splitText(props.challenge.description));

const gotToDetails = (id: string) => {
  router.push(`/challenges/${id}`);
};
</script>

<template>
  <div
    class="group relative bg-card border border-border rounded-xl px-6 py-5 my-2 mx-4 cursor-pointer overflow-hidden hover:border-primary hover:-translate-y-0.5 transition-all duration-150"
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
      <span class="text-xs text-muted-foreground font-mono"
        >#{{ String(props.challenge.id).padStart(2, "0") }}</span
      >
    </div>

    <!-- title -->
    <h3 class="text-base font-medium text-foreground mb-1 leading-snug">
      {{ props.challenge.title }}
    </h3>

    <!-- description -->
    <div class="prose prose-waspscript max-w-none" v-html="description" />

    <!-- footer -->
    <div class="flex items-center justify-between border-t border-border pt-3">
      <div class="flex items-center gap-2 text-xs text-muted-foreground">
        <span
          class="w-1.5 h-1.5 rounded-full"
          :class="props.challenge.completed ? 'bg-[#4CAF72]' : 'bg-muted'"
        />
        {{ props.challenge.completed ? "completed" : "not started" }}
      </div>
      <i
        @click="gotToDetails(props.challenge.id)"
        class="fa-solid fa-arrow-right-long text-muted-foreground text-lg group-hover:text-primary group-hover:translate-x-1 transition-all duration-150"
      ></i>
    </div>
  </div>
</template>
