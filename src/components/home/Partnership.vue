<script setup lang="ts">
import { partnership } from "../../data/site";
import SectionIntro from "../SectionIntro.vue";
</script>

<template>
  <section id="partnership" class="section" aria-labelledby="partnership-title">
    <div class="wrap split">
      <img
        class="split-media"
        :src="partnership.src"
        :alt="partnership.alt"
        width="1152"
        height="864"
      />
      <div>
        <SectionIntro
          kicker="Partnership"
          :title="partnership.title"
          title-id="partnership-title"
        />
        <p>{{ partnership.body }}</p>
        <ul class="with-list">
          <li v-for="name in partnership.with" :key="name">{{ name }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
