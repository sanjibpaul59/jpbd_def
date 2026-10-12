<script setup lang="ts">
import { closing, tagline } from "../../data/site";
</script>

<template>
  <section class="closing" aria-labelledby="closing-title">
    <div class="wrap closing-inner">
      <h2 id="closing-title">{{ closing.title }}</h2>
      <p class="closing-pair">{{ closing.pair }}</p>
      <p>{{ closing.body }}</p>
      <p class="tagline">{{ tagline }}</p>
    </div>
  </section>
</template>
