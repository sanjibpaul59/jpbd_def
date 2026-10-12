<script setup lang="ts">
import { gallery } from "../../data/site";
import SectionIntro from "../SectionIntro.vue";
</script>

<template>
  <section id="gallery" class="section section-ivory" aria-labelledby="gallery-title">
    <div class="wrap">
      <SectionIntro
        kicker="Gallery"
        title="Scenes from the exchange"
        title-id="gallery-title"
      />
      <div class="gallery-grid">
        <figure v-for="item in gallery" :key="item.src">
          <img :src="item.src" :alt="item.alt" width="1152" height="864" />
          <figcaption>{{ item.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
