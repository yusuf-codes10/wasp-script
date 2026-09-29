<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    limit?: number;
    page?: number;
    length: number;
}>(), {
    limit: 5,
    page: 1,
});

const emit = defineEmits<{
    (e: 'changePage', page: number): void;
}>();

const totalPages = computed(() => Math.ceil(props.length / props.limit));
</script>

<template>
  <div class="flex items-center justify-center gap-2 mt-6 font-mono">
    <button
      v-for="p in totalPages"
      :key="p"
      @click="emit('changePage', p)"
      class="w-8 h-8 rounded-md text-[13px] transition-all duration-150 border"
      :class="p === props.page
        ? 'bg-primary text-primary-foreground border-primary font-bold'
        : 'bg-[#111111] text-[#555] border-[#2a2a2a] hover:border-primary hover:text-primary'"
    >
      {{ p }}
    </button>
  </div>
</template>