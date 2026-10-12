<script setup lang="ts">
import { bulletin, news } from "../../data/site";
import SectionIntro from "../SectionIntro.vue";
</script>

<template>
  <section id="news" class="section section-ivory" aria-labelledby="news-title">
    <div class="wrap split">
      <img class="split-media" :src="news.src" :alt="news.alt" width="1152" height="864" />
      <div>
        <SectionIntro kicker="News" :title="news.title" title-id="news-title" />
        <p>{{ news.body }}</p>
        <ul v-if="bulletin.length > 0" class="schedule">
          <li v-for="item in bulletin" :key="item.title">
            <p class="schedule-when">{{ item.date }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
