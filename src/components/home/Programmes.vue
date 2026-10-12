<script setup lang="ts">
import { programmes } from "../../data/site";
import SectionIntro from "../SectionIntro.vue";
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
            <ul v-if="programme.points">
              <li v-for="point in programme.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
