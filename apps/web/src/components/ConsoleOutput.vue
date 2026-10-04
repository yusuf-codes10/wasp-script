<script setup lang="ts">
export type ConsoleLine = {
  type?: "log" | "error" | "info";
  text: string;
};

defineProps<{
  lines?: ConsoleLine[];
}>();

const emit = defineEmits<{
  (e: "run"): void;
}>();

const lineClass: Record<string, string> = {
  log: "text-foreground",
  info: "text-muted-foreground",
  error: "text-destructive",
};

const promptClass: Record<string, string> = {
  log: "text-primary",
  info: "text-muted-foreground",
  error: "text-destructive",
};
</script>

<template>
  <div class="bg-card border border-border rounded-xl flex flex-col overflow-hidden">
    <!-- header -->
    <div
      class="flex items-center justify-between px-4 py-2 border-b border-border shrink-0"
    >
      <span class="text-xs text-muted-foreground font-mono">console</span>
      <button
        type="button"
        aria-label="Run code"
        class="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground hover:brightness-110 active:brightness-95 focus-visible:ring-2 focus-visible:ring-ring/60 outline-none transition duration-150 cursor-pointer"
        @click="emit('run')"
      >
        <i class="fa-solid fa-play text-[9px]" />
        <span>run</span>
      </button>
    </div>

    <!-- output -->
    <div
      class="px-4 py-3 font-mono text-sm leading-relaxed min-h-32 max-h-80 overflow-y-auto overflow-x-auto bg-background/50"
    >
      <p
        v-if="!lines || !lines.length"
        class="text-muted-foreground select-none"
      >
        // output will appear here
      </p>

      <div
        v-for="(line, i) in lines"
        :key="i"
        class="flex gap-2 py-0.5"
        :class="lineClass[line.type ?? 'log']"
      >
        <span
          class="select-none shrink-0"
          :class="promptClass[line.type ?? 'log']"
          >&gt;</span
        >
        <span class="whitespace-pre-wrap wrap-break min-w-0">{{
          line.text
        }}</span>
      </div>
    </div>
  </div>
</template>