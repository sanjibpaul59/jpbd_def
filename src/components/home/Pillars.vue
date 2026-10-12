<script setup lang="ts">
import { pillars } from "../../data/site";
import SectionIntro from "../SectionIntro.vue";
</script>

<template>
  <section id="pillars" class="section section-ivory" aria-labelledby="pillars-title">
    <div class="wrap">
      <SectionIntro
        kicker="Focus"
        title="Six pillars for a stronger partnership"
        title-id="pillars-title"
      />
      <div class="pillar-grid">
        <article v-for="pillar in pillars" :key="pillar.number" class="pillar">
          <img
            class="pillar-photo"
            :src="pillar.src"
            :alt="pillar.alt"
            width="1000"
            height="750"
          />
          <div class="pillar-body">
            <p class="pillar-num" aria-hidden="true">{{ pillar.number }}</p>
            <h3>{{ pillar.title }}</h3>
            <p>{{ pillar.summary }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
