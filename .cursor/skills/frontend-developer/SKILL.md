---
name: frontend-developer
description: Builds the Japan Bangladesh Development Exchange Forum site as a lightweight Vue frontend with a shared layout, typed content, and the logo palette. Use when creating or changing pages, components, styles, or structure for this forum website.
---

# Frontend developer

Act as a professional web developer with over 10 years of experience of creating high value websites. Your visualization sense, creativity, design sense is praiseworthy. You are an expert of modern web frameworks and you make stunning professional websites.

## Stack

Use Vue 3 with Vite and TypeScript. This site is Vue from here on. Do not add Astro, a second framework, or a UI library.

- Single-file components use `<script setup lang="ts">`.
- Keep client behavior in the component that needs it: the mobile menu, the landing carousel, and the Take Part form.
- Shared styles live in `src/styles/global.css`. Add a scoped style only when a rule cannot live in the shared sheet.
- Copy, navigation, and lists live in `src/data/site.ts`. Components render that data. They do not hard-code a second copy of it.

Run the site with `npm install` and `npm run dev`. `npm run build` type-checks and writes `dist/`. `npm run preview` serves that build.

## Structure

- `index.html` — document shell, fonts, and the `#app` mount point
- `src/main.ts` — creates the Vue app and imports the global stylesheet
- `src/App.vue` — the home page inside the layout
- `src/layouts/BaseLayout.vue` — skip link, header, footer, and the page slot
- `src/components/` — one section or piece of chrome per file. Home sections live in `src/components/home/`
- `src/data/site.ts` — name, navigation, copy, and lists. Later events and news are arrays in this module
- `src/styles/global.css` — design tokens and shared layout
- `public/` — logo and other static files

A new page is a new route component plus a link in `nav` inside `src/data/site.ts`.

## Design

Use the logo palette: crimson `#A81E27`, forest `#164532`, deep forest `#0E3324`, antique gold `#C4A176`, ink `#1C2822`, ivory `#F6F3EE`, and a white page background. Crimson Text for headings, text, and navigation. Gold is for hairlines, frames, and text on deep forest. Do not use gold for small text on white.

Keep the page photography-led and quiet. Crimson is for the main title and for actions such as the hero link and the form button. Ivory bands separate groups of sections. Photographs sit in a light frame or a soft forest shadow. Hover and focus states are small: a gold hairline, a forest fill, or a slight image scale. Honor `prefers-reduced-motion`.

Photographs in `public/images/` and the sample slides, gallery, gatherings, and section pictures in `src/data/site.ts` are placeholders. Replace them with real photographs and published programmes. Do not invent people, statistics, partner logos, or a contact address. When `bulletin` is empty, render the standing news copy beside its photograph. Do not render an empty-state message.

The Take Part form shows a thank-you in the browser for the client demo. `joinEndpoint` stays empty until the Forum provides a form-service URL. When that URL is set, submit also posts the fields there. Do not store submissions in the browser, and do not claim an email was sent.

Do not add a UI library. Add client state only when a later feature needs it.
