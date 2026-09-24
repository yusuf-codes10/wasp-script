<script setup>
import { useRoute } from 'vue';

const route = useRoute();
</script>

<template>
  <div>
    <h1>Challenges details</h1>
    <p>{{route.params.id}}</p>
  </div>
</template>