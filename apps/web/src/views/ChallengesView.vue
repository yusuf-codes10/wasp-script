<script setup lang="ts">
import ChallengeUnit from "@/components/ChallengeUnit.vue";
import { getAllChallenges } from "@/services/challenges";
import { onMounted, ref, watch } from "vue";
import type { Challenge, toDisplayChallenge } from "@shared/types/challenge";
import PaginationBar from "@/components/PaginationBar.vue";
import FilterBar from "@/components/FilterBar.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const challngs = ref<toDisplayChallenge[]>();

const totalCount = ref<number>(0);
const limit = ref<number>(5);

const loadChallenges = async (filter: string = "") => {
  const page = Number(route.query.page) || 1;
  const difficulty = String(route.query.difficulty || "");

  const data = await getAllChallenges(page, limit.value, difficulty);
  challngs.value = data.challenges;
  totalCount.value = data.total;

  console.log("Challenges: ", data);
};

const setDifficulty = (difficulty: string) => {
  router.push({
    query: {
      ...route.query,
      difficulty,
    },
  });
};

// a watch that watches the url changes
watch(
  () => route.query,
  () => {
    loadChallenges();
  },
  { immediate: true}
);

onMounted(async () => {
  await loadChallenges();
});
</script>

<template>
  <div>
    <FilterBar @filter="setDifficulty($event)" />

    <div v-if="challngs" class="max-w-4xl mx-auto">
      <ChallengeUnit v-for="ch in challngs" :key="ch.id" :challenge="ch" />
      <PaginationBar
        :length="totalCount"
        :page="Number(route.query.page) || 1"
        :limit="limit"
        @changePage="
          router.push({
            query: {
              ...route.query,
              page: $event,
            },
          })
        "
      />
    </div>

    <div v-else class="flex items-center justify-center h-64">
      <span class="text-muted-foreground text-sm font-mono">loading...</span>
    </div>
  </div>
</template>
