<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getChallengeById } from '@/services/challenges';
import ChallengeDetails from '@/layouts/ChallengeDetails.vue';
import type { Challenge } from '@shared/types/challenge';

const route = useRoute();

const challenge = ref<Challenge>();

const loadChallenge = async () => {
  const response = await getChallengeById(Number(route.params.id));
  console.log(response);
  challenge.value = response;
}

onMounted(async () => {
  await loadChallenge();
})
</script>

<template>
  <div class="min-h-screen bg-background px-6 py-8">
    <div v-if="challenge" class="max-w-4xl mx-auto">
      <ChallengeDetails :challenge="challenge" />
    </div>
    <div v-else class="flex items-center justify-center h-64">
      <span class="text-muted-foreground text-sm font-mono">loading...</span>
    </div>
  </div>
</template>