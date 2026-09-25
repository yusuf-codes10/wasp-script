<script setup lang="ts">
import NavBar from "@/layouts/NavBar.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <NavBar v-if="route.name !== 'Register'" />
  <RouterView />
</template>
