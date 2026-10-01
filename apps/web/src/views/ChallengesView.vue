<script setup lang="ts">
import ChallengeUnit from "@/components/ChallengeUnit.vue";
import { getAllChallenges } from "@/services/challenges";
import { onMounted, ref } from "vue";
import type { Challenge, toDisplayChallenge } from "@shared/types/challenge";
import PaginationBar from "@/components/PaginationBar.vue";

const challngs = ref<toDisplayChallenge[]>([]);

const currentPage = ref<number>();
const totalCount = ref<number>(50);

const loadChallenges = async () => {
  const data = await getAllChallenges();
  challngs.value = data;
  console.log("Challenges: ", data);
};

onMounted(async () => {
  await loadChallenges();
});
</script>

<template>
  <div>
    <ChallengeUnit v-for="ch in challngs" :key="ch.id" :challenge="ch" />
    <PaginationBar
      :length="totalCount"
      :page="currentPage"
      :limit="5"
      @changePage="
        currentPage = $event;
        loadChallenges();
      "
    />
  </div>
</template>
