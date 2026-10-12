<script setup lang="ts">
import { gatherings, standingGatherings } from "../../data/site";
import SectionIntro from "../SectionIntro.vue";
</script>

<template>
  <section id="events" class="section" aria-labelledby="events-title">
    <div class="wrap">
      <SectionIntro kicker="Events" title="Upcoming gatherings" title-id="events-title" />
      <p class="measure">
        The Forum brings people together through forums, policy dialogues, academic
        exchange, and cultural meetings between Japan and Bangladesh.
      </p>
      <div v-if="gatherings.length > 0" class="event-grid">
        <article v-for="item in gatherings" :key="item.title" class="event-card">
          <img :src="item.src" :alt="item.alt" width="1280" height="720" />
          <div class="event-body">
            <p class="schedule-when">{{ item.when }} · {{ item.place }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
          </div>
        </article>
      </div>
      <div class="pillar-grid standing-grid">
        <article
          v-for="item in standingGatherings"
          :key="item.title"
          class="pillar pillar-note"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
