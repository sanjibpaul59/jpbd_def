<script setup lang="ts">
import { forumName, hero, tagline } from "../../data/site";
import Carousel from "./Carousel.vue";
</script>

<template>
  <section class="landing" aria-labelledby="hero-title">
    <Carousel />
    <div class="wrap landing-intro">
      <img
        class="landing-logo"
        src="/assets/logo_jpbddef.jpeg"
        alt=""
        width="1254"
        height="1254"
      />
      <p class="kicker">Japan · Bangladesh</p>
      <h1 id="hero-title">{{ forumName }}</h1>
      <p class="tagline">{{ tagline }}</p>
      <p class="lead">{{ hero.lead }}</p>
      <a class="text-link" :href="hero.ctaHref">{{ hero.ctaLabel }}</a>
    </div>
  </section>
</template>
