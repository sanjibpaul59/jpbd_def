<script setup lang="ts">
defineProps<{
  kicker: string;
  title: string;
  titleId: string;
}>();
</script>

<template>
  <p class="kicker">{{ kicker }}</p>
  <h2 :id="titleId">{{ title }}</h2>
</template>
