<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    loading?: boolean;
    type?: string;
  }>(),
  {
    title: "click",
    type: "submit",
    loading: false
  },
);
</script>

<template>
  <button
    :disabled="props.loading"
    :class="[
      'inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-[13px] px-6 py-3 rounded-lg font-mono transition-opacity duration-150 cursor-pointer',
      props.loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
    ]"
  >
    <span v-if="props.loading" class="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
    <span v-else>{{ props.title }}</span>
    <slot />
  </button>
</template>
