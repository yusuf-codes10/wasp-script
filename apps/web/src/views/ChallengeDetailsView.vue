<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="bg-red-500">
    <h1>Challenges details</h1>
    <p>{{route.params.id}}</p>
  </div>
</template>