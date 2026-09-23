<script setup lang="ts">
import ChallengeUnit from '@/components/ChallengeUnit.vue';
import { getAllChallenges } from '@/services/challenges';
import { onMounted } from 'vue';

const loadChallenges = async () => {
  const { data } =await getAllChallenges();
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