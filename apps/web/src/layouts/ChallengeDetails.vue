<script setup lang="ts">
import type { Challenge } from "@shared/types/challenge";
import { useMarkdown } from "@/composables/useMarkdown";
import { useRouter } from "vue-router";
import MainButton from "@/components/MainButton.vue";
import { VueMonacoEditor } from "@guolao/vue-monaco-editor";
import { ref } from "vue";
import { submitResponse } from "@/services/submissions.ts";
import { useThemeStore } from "@/stores/themeStore.ts";
import ConsoleOutput from "@/components/ConsoleOutput.vue";
import { useCodeRunner } from "@/composables/useCompiler";

const router = useRouter();
const themeStore = useThemeStore();

const codeRunner = useCodeRunner();

const props = defineProps<{
  challenge: Challenge;
}>();

const difficultyClass: Record<string, string> = {
  easy: "bg-[#0f2a1a] text-[#4CAF72] border border-[#1a4a2a]",
  medium: "bg-[#2a1a00] text-[#E6A800] border border-[#4a3000]",
  hard: "bg-[#2a0f0f] text-[#E05252] border border-[#4a1a1a]",
  legendary: "bg-[#1a0a2a] text-[#a855f7] border border-[#3a1a4a]",
};

const userCode = ref<string>(props.challenge.startCode);
const WaspScriptResponse = ref<string | null>(null);
const error = ref<string>();

const editorHeight = ref("0px");

const description = useMarkdown(props.challenge.description);

const submitAnswer = async () => {
  try {
    const data = await submitResponse({
      code: userCode.value,
      challengeId: props.challenge.id,
    });
    const { role, content, reasoning } = data;
    WaspScriptResponse.value = content;
    console.log(data);
  } catch (err) {
    console.log(err);
    // error.value = err;
  }
};

const handleMount = (editor: any) => {
  // set initial height
  const updateHeight = () => {
    const contentHeight = editor.getContentHeight();
    editorHeight.value = `${contentHeight}px`;
  };

  updateHeight();

  // update height whenever content changes
  editor.onDidContentSizeChange(updateHeight);
};
</script>

<template>
  <div class="flex flex-col gap-6">
    <button
      @click="router.back()"
      class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-150 w-fit text-sm"
    >
      <i class="fa-solid fa-arrow-left-long" />
      <span>back to challenges</span>
    </button>

    <div class="bg-card border border-border rounded-xl px-6 py-5">
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-2">
          <span
            :class="difficultyClass[props.challenge.difficulty]"
            class="text-[11px] font-medium px-3 py-0.5 rounded-full"
          >
            {{ props.challenge.difficulty }}
          </span>
          <span
            class="text-[11px] font-medium px-3 py-0.5 rounded-full bg-primary/15 text-foreground border border-primary/40"
          >
            {{ props.challenge.category }}
          </span>
        </div>
        <span class="text-xs text-muted-foreground font-mono"
          >#{{ String(props.challenge.id).padStart(2, "0") }}</span
        >
      </div>
      <h1 class="text-xl font-semibold text-foreground mb-4">
        {{ props.challenge.title }}
      </h1>
      <div
        class="prose prose-waspscript max-w-none text-sm"
        v-html="description"
      />
    </div>

    <div class="bg-card border border-border rounded-xl flex flex-col">
      <div
        class="flex items-center justify-between px-4 py-2 border-b border-border shrink-0"
      >
        <span class="text-xs text-muted-foreground font-mono">solution.js</span>
        <span class="w-2 h-2 rounded-full bg-muted" />
      </div>

      <VueMonacoEditor
        v-model:value="userCode"
        language="javascript"
        :theme="themeStore.dark ? 'hc-black' : 'vs'"
        :style="{ height: editorHeight, width: '100%' }"
        :options="{
          automaticLayout: true,
          scrollBeyondLastLine: false,
          fontSize: 14,
          lineNumbers: 'on',
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
        }"
        @mount="handleMount"
      />
    </div>

    <ConsoleOutput @run="codeRunner.run(userCode)"/>

    <!-- ! Submission Response -->
    <Transition name="fade">
      <div
        v-if="WaspScriptResponse"
        class="border rounded-xl px-6 py-5 font-mono text-sm"
        :class="
          WaspScriptResponse.startsWith('ACCEPTED')
            ? 'bg-[#0f2a1a] border-[#1a4a2a]'
            : 'bg-[#2a0f0f] border-[#4a1a1a]'
        "
      >
        <!-- header -->
        <div class="flex items-center gap-3 mb-3">
          <span
            class="text-xs font-semibold px-3 py-0.5 rounded-full"
            :class="
              WaspScriptResponse.startsWith('ACCEPTED')
                ? 'bg-[#1a4a2a] text-[#4CAF72]'
                : 'bg-[#4a1a1a] text-[#E05252]'
            "
          >
            {{
              WaspScriptResponse.startsWith("ACCEPTED")
                ? "✓ ACCEPTED"
                : "✗ REJECTED"
            }}
          </span>
          <span class="text-muted-foreground text-xs">WaspScript AI</span>
        </div>

        <!-- message -->
        <p
          class="leading-relaxed"
          :class="
            WaspScriptResponse.startsWith('ACCEPTED')
              ? 'text-[#4CAF72]'
              : 'text-[#E05252]'
          "
        >
          {{ WaspScriptResponse.split(" - ")[1] ?? WaspScriptResponse }}
        </p>
      </div>
    </Transition>

    <div class="flex w-full md:justify-end" @click="submitAnswer">
      <MainButton class="w-full sm:w-auto" title="Submit solution">
        <i class="fa-solid fa-paper-plane text-xs" />
      </MainButton>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
