<script setup lang="ts">
import type { ImageBreak } from "../../data/site";

defineProps<{
  item: ImageBreak;
}>();
</script>

<template>
  <figure class="image-break">
    <img :src="item.src" :alt="item.alt" width="1280" height="720" />
    <figcaption>{{ item.caption }}</figcaption>
  </figure>
</template>
