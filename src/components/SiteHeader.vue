<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { nav } from "../data/site";

const open = ref(false);
const desktopQuery = window.matchMedia("(min-width: 1101px)");

function setOpen(next: boolean): void {
  open.value = next;
}

function onToggle(): void {
  setOpen(!open.value);
}

function onNavClick(event: MouseEvent): void {
  const target = event.target;
  if (target instanceof Element && target.closest("a")) {
    setOpen(false);
  }
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === "Escape") {
    setOpen(false);
  }
}

function closeOnDesktop(): void {
  if (desktopQuery.matches) {
    setOpen(false);
  }
}

onMounted(() => {
  document.addEventListener("keydown", onKeydown);
  desktopQuery.addEventListener("change", closeOnDesktop);
});

onUnmounted(() => {
  document.removeEventListener("keydown", onKeydown);
  desktopQuery.removeEventListener("change", closeOnDesktop);
});
</script>

<template>
  <header class="site-header">
    <div class="wrap header-bar">
      <a class="brand" href="/#top">
        <span class="brand-mark-frame">
          <img
            class="brand-mark"
            src="/assets/logo_jpbddef.jpeg"
            alt=""
            width="1254"
            height="1254"
          />
        </span>
        <span class="brand-text">
          <span class="brand-main">Japan Bangladesh</span>
          <span class="brand-sub">Development Exchange Forum</span>
        </span>
      </a>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="site-nav"
        @click="onToggle"
      >
        {{ open ? "Close" : "Menu" }}
      </button>
      <nav
        id="site-nav"
        class="site-nav"
        :class="{ 'is-open': open }"
        aria-label="Primary"
        @click="onNavClick"
      >
        <ul>
          <li v-for="item in nav" :key="item.href">
            <a :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
