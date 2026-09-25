<script setup lang="ts">
import type { Challenge } from '@shared/types/challenge';
import { useMarkdown } from '@/composables/useMarkdown';
import { useRouter } from 'vue-router';
import MainButton from './MainButton.vue';

const router = useRouter();

const props = defineProps<{
  challenge: Challenge;
}>();

const difficultyClass: Record<string, string> = {
  easy: 'bg-[#0f2a1a] text-[#4CAF72] border border-[#1a4a2a]',
  medium: 'bg-[#2a1a00] text-[#E6A800] border border-[#4a3000]',
  hard: 'bg-[#2a0f0f] text-[#E05252] border border-[#4a1a1a]',
  legendary: 'bg-[#1a0a2a] text-[#a855f7] border border-[#3a1a4a]',
};

const description = useMarkdown(props.challenge.description);
</script>

<template>
  <div class="flex flex-col gap-6">

    <button @click="router.back()" class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-150 w-fit text-sm">
      <i class="fa-solid fa-arrow-left-long" />
      <span>back to challenges</span>
    </button>

    <div class="bg-card border border-border rounded-xl px-6 py-5">
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-2">
          <span :class="difficultyClass[props.challenge.difficulty]" class="text-[11px] font-medium px-3 py-0.5 rounded-full">
            {{ props.challenge.difficulty }}
          </span>
          <span class="text-[11px] font-medium px-3 py-0.5 rounded-full bg-secondary text-primary border border-border">
            {{ props.challenge.category }}
          </span>
        </div>
        <span class="text-xs text-muted-foreground font-mono">#{{ String(props.challenge.id).padStart(2, '0') }}</span>
      </div>
      <h1 class="text-xl font-semibold text-foreground mb-4">{{ props.challenge.title }}</h1>
      <div class="prose prose-invert prose-waspscript max-w-none text-sm" v-html="description" />
    </div>

    <div class="bg-card border border-border rounded-xl overflow-hidden">
      <div class="flex items-center justify-between px-4 py-2 border-b border-border">
        <span class="text-xs text-muted-foreground font-mono">solution.js</span>
        <span class="w-2 h-2 rounded-full bg-muted" />
      </div>
      <textarea
        :value="props.challenge.startCode"
        rows="10"
        spellcheck="false"
        class="w-full bg-transparent px-4 py-4 text-sm font-mono text-foreground resize-none outline-none focus:outline-none leading-relaxed"
      />
    </div>

    <div class="flex justify-end">
      <MainButton title="Submit solution" >
        <i class="fa-solid fa-paper-plane text-xs" />
      </MainButton>
    </div>

  </div>
</template>