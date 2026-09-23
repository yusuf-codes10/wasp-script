<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
  }>(),
  {},
);
</script>

<template>
  <div>
    <!-- card -->
    <div>
      <h1>{{ props.title }}</h1>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>
