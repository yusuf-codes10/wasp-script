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
    class="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-[13px] px-6 py-3 rounded-lg font-mono hover:opacity-90 transition-opacity duration-150 cursor-pointer"
  >
    {{ props.title }}
  </button>
  <!-- <button
    class="flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-150"
  >
    {{ props.title }}
  </button> -->
</template>
