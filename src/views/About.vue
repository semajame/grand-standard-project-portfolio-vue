<template>
  <div class="home__overlay"></div>
  <main class="about__hero">
    <div class="hero__content">
      <span> {{ heroSpan }} </span>

      <h1>{{ heroHeader }}</h1>
      <button class="explore__hotel" @click="toggleKnow">
        {{ heroButton }}
      </button>
    </div>
  </main>

  <section id="about__section"></section>
</template>

<script>
import { toggleKnow } from "../scrollUtils";
export default {
  data() {
    return {
      heroSpan: "LEARN ABOUT US",
      heroHeader: "Voted best hotel 10 years in a row",
      heroButton: "FIND OUT WHY",
    };
  },

  methods: {
    toggleKnow,
  },
};
</script>

<style></style>
