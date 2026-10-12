<script setup lang="ts">
import About from "./About.vue";
import Closing from "./Closing.vue";
import Gallery from "./Gallery.vue";
import Gatherings from "./Gatherings.vue";
import Hero from "./Hero.vue";
import ImageBreak from "./ImageBreak.vue";
import News from "./News.vue";
import Partnership from "./Partnership.vue";
import Pillars from "./Pillars.vue";
import Programmes from "./Programmes.vue";
import Purpose from "./Purpose.vue";
import TakePart from "./TakePart.vue";
import { breakAfterEvents, breakAfterProgrammes } from "../../data/site";
</script>

<template>
  <Hero />
  <About />
  <Purpose />
  <Pillars />
  <Programmes />
  <ImageBreak :item="breakAfterProgrammes" />
  <Gallery />
  <Gatherings />
  <ImageBreak :item="breakAfterEvents" />
  <Partnership />
  <News />
  <TakePart />
  <Closing />
</template>
