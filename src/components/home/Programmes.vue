<script setup lang="ts">
import { onUnmounted, reactive } from "vue";
import { programmes } from "../../data/site";
import SectionIntro from "../SectionIntro.vue";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealed = reactive<Record<string, boolean>>(
  Object.fromEntries(
    programmes
      .filter((programme) => programme.points)
      .map((programme) => [programme.title, reduceMotion]),
  ),
);

const observer = reduceMotion
  ? undefined
  : new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) {
            return;
          }
          const title = entry.target.dataset.title;
          if (title) {
            revealed[title] = true;
          }
          observer?.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

function watchList(element: Element | null): void {
  if (element instanceof HTMLElement) {
    observer?.observe(element);
  }
}

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <section id="programmes" class="section" aria-labelledby="programmes-title">
    <div class="wrap">
      <SectionIntro
        kicker="Programmes"
        title="Culture, education, youth, and sustainable development"
        title-id="programmes-title"
      />
      <div class="programme-list">
        <article
          v-for="(programme, index) in programmes"
          :key="programme.title"
          class="programme-row"
          :class="{ 'programme-row-flip': index % 2 === 1 }"
        >
          <img
            class="split-media"
            :src="programme.src"
            :alt="programme.alt"
            width="1152"
            height="864"
          />
          <div class="programme-copy">
            <h3>{{ programme.title }}</h3>
            <p v-if="programme.summary">{{ programme.summary }}</p>
            <ul
              v-if="programme.points"
              :ref="watchList"
              class="point-list"
              :class="{ 'is-shown': revealed[programme.title] }"
              :data-title="programme.title"
            >
              <li
                v-for="(point, pointIndex) in programme.points"
                :key="point"
                :style="{ '--i': pointIndex }"
              >
                {{ point }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
