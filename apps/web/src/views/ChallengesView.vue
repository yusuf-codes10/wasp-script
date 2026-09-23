<script setup lang="ts">
import ChallengeUnit from '@/components/ChallengeUnit.vue';
import { getAllChallenges } from '@/services/challenges';
import { onMounted, ref } from 'vue';
import type { Challenge } from '@shared/types/challenge';

const challngs = ref<Challenge[]>([]);

const loadChallenges = async () => {
  const data = await getAllChallenges();
  challngs.value = data;
  console.log(data);
}

onMounted(async () => {
  await loadChallenges();
})

</script>

<template>
  <div>
    <ChallengeUnit />
  </div>
</template>