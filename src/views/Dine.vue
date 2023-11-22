<template>
  <div class="home__overlay"></div>
  <main class="dine__hero">
    <div class="hero__content">
      <span> {{ dineSpan }} </span>

      <h1>{{ dineHeader }}</h1>
      <button class="explore__hotel" @click="toggleKnow">
        {{ dineButton }}
      </button>
    </div>
  </main>

  <section class="stay__about__section" id="about__section">
    <div class="about__content">
      <h2>
        {{ aboutHeader }}
      </h2>

      <span> {{ aboutSpan }} </span>

      <button class="learn__more">{{ aboutButton }}</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dineSpan: "Dine with Us",
      dineHeader: "Eat like a king at one of the city's best.",
      dineButton: "Browse our Menu",
      aboutHeader: '"A flavour tour around the world, in a single night."',
      aboutSpan: "Recent Guest",
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
