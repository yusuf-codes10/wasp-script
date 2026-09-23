<script setup lang="ts">
import type { Challenge } from '@shared/types/challenge';

const props = withDefaults(
  defineProps<{
    challenge: Challenge
  }>(),
  {},
);
</script>

<template>
  <div>
    <!-- card -->
    <div>
      <h1>{{ props.challenge.title }}</h1>
      <p>{{ props.challenge.description }}</p>
    </div>
  </div>
</template>
