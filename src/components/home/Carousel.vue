<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import { slides } from "../../data/site";

const index = ref(0);
const timer = ref(0);

const activeSlide = (): (typeof slides)[number] => slides[index.value] ?? slides[0];

function show(next: number): void {
  const count = slides.length;
  if (count === 0) {
    return;
  }
  index.value = (next + count) % count;
}

function start(): void {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || slides.length < 2 || timer.value) {
    return;
  }
  timer.value = window.setInterval(() => show(index.value + 1), 7000);
}

function stop(): void {
  window.clearInterval(timer.value);
  timer.value = 0;
}

start();

onUnmounted(stop);
</script>

<template>
  <div
    class="carousel"
    data-carousel
    @mouseenter="stop"
    @mouseleave="start"
    @focusin="stop"
    @focusout="start"
  >
    <div class="carousel-viewport">
      <figure
        v-for="(slide, slideIndex) in slides"
        :key="slide.src"
        class="carousel-slide"
        :class="{ 'is-active': slideIndex === index }"
        data-slide
      >
        <img :src="slide.src" :alt="slide.alt" width="1280" height="720" />
      </figure>
    </div>
    <div class="carousel-bar">
      <div class="carousel-copy">
        <p class="carousel-kicker">{{ activeSlide().kicker }}</p>
        <p class="carousel-caption">{{ activeSlide().caption }}</p>
      </div>
      <div class="carousel-controls">
        <button type="button" data-prev aria-label="Previous photograph" @click="show(index - 1)">
          <span aria-hidden="true">‹</span>
        </button>
        <div class="carousel-dots">
          <button
            v-for="(slide, slideIndex) in slides"
            :key="slide.kicker"
            type="button"
            class="carousel-dot"
            :class="{ 'is-active': slideIndex === index }"
            :aria-label="slide.kicker"
            :aria-pressed="slideIndex === index ? 'true' : 'false'"
            @click="show(slideIndex)"
          />
        </div>
        <button type="button" data-next aria-label="Next photograph" @click="show(index + 1)">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  </div>
</template>
