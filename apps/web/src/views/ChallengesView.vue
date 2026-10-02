<script setup lang="ts">
import ChallengeUnit from "@/components/ChallengeUnit.vue";
import { getAllChallenges } from "@/services/challenges";
import { ref, watch } from "vue";
import type { Challenge, toDisplayChallenge } from "@shared/types/challenge";
import PaginationBar from "@/components/PaginationBar.vue";
import FilterBar from "@/components/FilterBar.vue";
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
const router = useRouter();

const challngs = ref<toDisplayChallenge[]>();

const totalCount = ref<number>(0);
const limit = ref<number>(5);

const loadChallenges = async () => {
  const page = Number(route.query.page) || 1;
  const difficulty = String(route.query.difficulty || "");
  const search = String(route.query.search || "");

  const data = await getAllChallenges(page, limit.value, difficulty, search);
  challngs.value = data.challenges;
  totalCount.value = data.total;

  console.log("Challenges: ", data);
};

const setDifficulty = (difficulty: string) => {
  router.push({
    query: {
      ...route.query,
      difficulty,
      page: 1
    },
  });
};

// a watch that watches the url changes
watch(
  () => route.query,
  () => {
    loadChallenges();
  },
  { immediate: true },
);

const setSearchFilter = (search: string) => {
  router.push({
    query: {
      ...route.query,
      search,
      page: 1
    },
  });
};

// onMounted(async () => {
//   await loadChallenges();
// });
</script>

<template>
  <div>
    <FilterBar @filter="setDifficulty($event)" @search="setSearchFilter($event)" />

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
<!-- TODO: next: add a reset button -->
</template>
