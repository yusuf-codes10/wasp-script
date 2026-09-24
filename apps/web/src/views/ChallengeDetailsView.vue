<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getChallengeById } from '@/services/challenges';
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
  <div class="bg-red-500 text-4xl">
    <h1>Challenges details</h1>
    <p>{{route.params.id}}</p>
  </div>
</template>