<script setup lang="ts">
import { forumName, nav, tagline, year } from "../data/site";
</script>

<template>
  <footer class="site-footer">
    <div class="wrap footer-grid">
      <div>
        <p class="footer-name">{{ forumName }}</p>
        <p class="tagline">{{ tagline }}</p>
      </div>
      <nav aria-label="Footer">
        <ul class="footer-nav">
          <li v-for="item in nav" :key="item.href">
            <a :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
      <p class="footer-year">© {{ year }}</p>
    </div>
  </footer>
</template>
