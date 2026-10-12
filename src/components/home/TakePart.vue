<script setup lang="ts">
import { nextTick, ref } from "vue";
import {
  contactEmail,
  joinEndpoint,
  joinForm,
  pillars,
  takePart,
} from "../../data/site";
import SectionIntro from "../SectionIntro.vue";

const form = ref<HTMLFormElement | null>(null);
const thanks = ref<HTMLElement | null>(null);
const submitted = ref(false);
const sending = ref(false);
const sendFailed = ref(false);

async function onSubmit(event: Event): Promise<void> {
  event.preventDefault();
  sendFailed.value = false;
  const current = form.value;
  if (!current || !current.checkValidity()) {
    current?.reportValidity();
    return;
  }
  sending.value = true;
  try {
    if (joinEndpoint.startsWith("https://") || joinEndpoint.startsWith("http://")) {
      const response = await fetch(joinEndpoint, {
        method: "POST",
        body: new FormData(current),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        throw new Error("send");
      }
    }
    submitted.value = true;
    await nextTick();
    thanks.value?.focus();
  } catch {
    sendFailed.value = true;
    sending.value = false;
  }
}
</script>

<template>
  <section id="take-part" class="section" aria-labelledby="take-part-title">
    <div class="wrap split split-start">
      <img
        class="split-media"
        :src="takePart.src"
        :alt="takePart.alt"
        width="1152"
        height="864"
      />
      <div>
        <SectionIntro
          kicker="Take part"
          :title="takePart.title"
          title-id="take-part-title"
        />
        <p>{{ takePart.body }}</p>
        <form
          v-if="!submitted"
          ref="form"
          class="join-form"
          novalidate
          @submit="onSubmit"
        >
          <p v-if="sendFailed" class="join-error">{{ joinForm.sendError }}</p>
          <label>
            Name
            <input type="text" name="name" autocomplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autocomplete="email" required />
          </label>
          <label>
            Affiliation
            <input type="text" name="affiliation" autocomplete="organization" />
          </label>
          <label>
            Area of interest
            <select name="interest" required>
              <option value="" disabled selected>Choose an area</option>
              <option>{{ joinForm.interestGeneral }}</option>
              <option v-for="pillar in pillars" :key="pillar.number">
                {{ pillar.title }}
              </option>
            </select>
          </label>
          <label>
            Why you want to join
            <textarea name="purpose" rows="5" required></textarea>
          </label>
          <button class="join-submit" type="submit" :disabled="sending">
            {{ joinForm.submitLabel }}
          </button>
        </form>
        <div v-else ref="thanks" class="join-thanks" tabindex="-1">
          <h3>{{ joinForm.thanksTitle }}</h3>
          <p>{{ joinForm.thanksBody }}</p>
        </div>
        <p v-if="contactEmail" class="take-part-mail">
          <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
        </p>
      </div>
    </div>
  </section>
</template>
