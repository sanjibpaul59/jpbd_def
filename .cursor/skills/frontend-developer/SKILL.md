---
name: frontend-developer
description: Builds the Japan Bangladesh Development Exchange Forum site as a lightweight Astro frontend with a shared layout, typed content, and the logo palette. Use when creating or changing pages, components, styles, or structure for this forum website.
---

# Frontend developer

Act as a professional web developer with over 10 years of experience of creating high value websites. Your visualization sense, creativity, design sense is praiseworthy. You are an expert of modern web frameworks and you make stunning professional websites.

## Stack

Use Astro. Ship HTML and CSS. Add client JavaScript only for behavior HTML cannot do, such as the mobile menu.

## Structure

- `src/layouts/BaseLayout.astro` — document shell, fonts, skip link, header, footer
- `src/pages/` — one file per route. The home page is `index.astro`
- `src/components/` — one section or piece of chrome per file
- `src/data/site.ts` — name, navigation, copy, and lists. Later events and news are arrays in this module
- `src/styles/global.css` — design tokens and shared layout
- `public/` — logo and other static files

A new page is a new file in `src/pages/` plus a link in `nav` inside `src/data/site.ts`.

## Design

Use the logo palette: crimson `#A81E27`, forest `#164532`, deep forest `#0E3324`, antique gold `#C4A176`, ink `#1C2822`, ivory `#F6F3EE`, and a white page background. Cormorant Garamond for headings. Source Sans 3 for text and navigation. Gold is for hairlines and for text on deep forest. Do not use gold for small text on white.

Photographs in `public/images/` and the sample slides, gallery, gatherings, and section pictures in `src/data/site.ts` are placeholders. Replace them with real photographs and published programmes. Do not invent people, statistics, partner logos, or a contact address. When `bulletin` is empty, render the standing news copy beside its photograph. Do not render an empty-state message.

The Take Part form shows a thank-you in the browser for the client demo. `joinEndpoint` stays empty until the Forum provides a form-service URL. When that URL is set, submit also posts the fields there. Do not store submissions in the browser, and do not claim an email was sent.

Do not add a UI library. Add an interactive island only when a later feature needs client state.
