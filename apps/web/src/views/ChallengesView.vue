<script setup lang="ts">
import ChallengeUnit from "@/components/ChallengeUnit.vue";
import { getAllChallenges } from "@/services/challenges";
import { onMounted, ref } from "vue";
import type { Challenge, toDisplayChallenge } from "@shared/types/challenge";
import PaginationBar from "@/components/PaginationBar.vue";
import FilterBar from "@/components/FilterBar.vue";

const challngs = ref<toDisplayChallenge[]>([]);

const currentPage = ref<number>(1);
const totalCount = ref<number>(50);
const limit = ref<number>(5);

const loadChallenges = async () => {
  const data = await getAllChallenges(currentPage.value ?? 1, limit.value);
  challngs.value = data;
  console.log("Challenges: ", data);
};

onMounted(async () => {
  await loadChallenges();
});
</script>

<template>
  <div>
    <FilterBar @filter="loadChallenges" />
    <ChallengeUnit v-for="ch in challngs" :key="ch.id" :challenge="ch" />
    <PaginationBar
      :length="totalCount"
      :page="currentPage"
      :limit="limit"
      @changePage="
        currentPage = $event;
        loadChallenges();
      "
    />
  </div>
</template>
