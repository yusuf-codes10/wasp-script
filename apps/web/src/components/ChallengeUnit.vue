<script setup lang="ts">
import type { Challenge } from "@shared/types/challenge";

const props = defineProps<{
  challenge: Challenge;
}>();
</script>

<template>
  <div class="bg-foreground m-2 text-accent px-4 py-2">
    <!-- card -->
    <div>
      <!-- labels -->
      <div class="flex justify-between">
        <div class="flex gap-2">
          <span class="bg-chart-2 p-1 rounded-2xl">{{
            props.challenge.difficulty
          }}</span>
          <span class="bg-chart-3 p-1 rounded-3xl">{{
            props.challenge.category
          }}</span>
        </div>
        <div>
          <p>#{{ props.challenge.id }}</p>
        </div>
      </div>
      <h1 class="text-2xl">{{ props.challenge.title }}</h1>
      <p class="text-muted">{{ props.challenge.description }}</p>
    </div>
  </div>
</template>
