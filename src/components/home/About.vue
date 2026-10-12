<script setup lang="ts">
import { about } from "../../data/site";
import SectionIntro from "../SectionIntro.vue";
</script>

<template>
  <section id="about" class="section" aria-labelledby="about-title">
    <div class="wrap split">
      <div>
        <SectionIntro kicker="About" :title="about.title" title-id="about-title" />
        <p>{{ about.body }}</p>
      </div>
      <img
        class="split-media"
        :src="about.src"
        :alt="about.alt"
        width="1152"
        height="864"
      />
    </div>
  </section>
</template>
