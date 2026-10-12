<script setup lang="ts">
import { watch } from "vue";
import SiteFooter from "../components/SiteFooter.vue";
import SiteHeader from "../components/SiteHeader.vue";
import { forumName } from "../data/site";

const props = withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: forumName,
    description:
      "The Japan Bangladesh Development Exchange Forum builds friendship, cooperation, and co-prosperity between Japan and Bangladesh.",
  },
);

function applyDocumentMeta(): void {
  document.title = props.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", props.description);
}

watch(() => [props.title, props.description], applyDocumentMeta, {
  immediate: true,
});
</script>

<template>
  <a class="skip" href="#main">Skip to content</a>
  <SiteHeader />
  <main id="main">
    <slot />
  </main>
  <SiteFooter />
</template>
