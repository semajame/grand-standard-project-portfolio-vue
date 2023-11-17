<template>
  <div class="home__overlay"></div>
  <main class="stay__hero">
    <div class="hero__content">
      <span> {{ stayWelcome }} </span>

      <h1>{{ stayHeader }}</h1>
      <button class="get__to__know" @click="toggleKnow">
        {{ stayButton }}
      </button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      stayWelcome: "Stay with us",
      stayHeader: "Attention to detail like never before.",
      stayButton: "Explore our Hotel",
    };
  },

  methods: {
    toggleKnow() {
      const section = document.getElementById("about__section");

      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
