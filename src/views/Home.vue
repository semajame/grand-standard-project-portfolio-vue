<template>
  <div class="home__overlay"></div>
  <main class="home__hero">
    <div class="hero__content">
      <span> {{ heroWelcome }} </span>

      <h1>{{ heroHeader }}</h1>
      <button class="get__to__know" @click="toggleKnow">
        {{ heroButton }}
      </button>
    </div>
  </main>

  <section class="about__section" id="about__section">
    <div class="about__content">
      <span> {{ aboutSpan }} </span>

      <h2>
        {{ aboutHeader }}
      </h2>
      <button class="learn__more">{{ aboutButton }}</button>

      <div class="about__image">
        <img
          src="https://uploads-ssl.webflow.com/5e13a534946b1253f7c522a4/5e3f5501b61d39d39422a587_white-sofas-inside-building-2507010-p-1600.jpeg"
          alt="Hotel Image"
        />
      </div>
    </div>
  </section>
  <section class="rooms__section">
    <div class="rooms__content">
      <div class="rooms__header">
        <div class="room__left">
          <span> {{ roomsSpan }} </span>
          <h2>{{ roomsHeader }}</h2>
        </div>
        <div class="room__right">
          <router-link :to="{ name: 'stay' }" class="router__link room__link">
            {{ roomsButton }}
          </router-link>
        </div>
      </div>
      <div class="rooms__suites__container">
        <div
          class="rooms__suites"
          v-for="(items, index) in roomsSuites"
          :key="index"
        >
          <div class="rooms__img">
            <img :src="items.img" alt="Room Image" />
          </div>
          <h3>{{ items.header }}</h3>
          <p>{{ items.paragraph }}</p>
          <span> {{ items.view }} </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroWelcome: "Welcome",
      heroHeader: "A modern hotel for the modern world.",
      heroButton: "Get to know us",
      aboutSpan: "About Us",
      aboutHeader:
        "The Grand Standard offers peace and serenity to working professionals who appreciate exceptional experiences and service.",
      aboutButton: "Learn More",
      roomsSpan: "Rooms ___",
      roomsHeader: "Carefully luxury rooms designed for your comfort",
      roomsButton: "Browse all rooms",
      roomsSuites: [
        {
          img: "https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e3f5a1884ad292259f8b852_a-simple-bedroom-3659683-thumb-p-500.jpeg",
          header: "Junior Suite",
          paragraph:
            " With a panoramic view overlooking our grounds and direct access to the south facing porch, the Master Suite provides warmth and brightness for a peaceful getaway.",
          view: "View Details",
        },
        {
          img: "https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e3f5eab53cb2b1214a00d4d_ralph-kayden-FqqiAvJejto-unsplash-thumb-p-500.jpeg",

          header: "Master Suite",
          paragraph:
            " With a panoramic view overlooking our grounds and direct access to the south facing porch, the Master Suite provides warmth and brightness for a peaceful getaway.",
          view: "View Details",
        },
        {
          img: " https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e3f5f35eb1a90214a28ea05_apartment-bed-bedroom-chair-271618-thumb-p-500.jpeg",
          header: "Executive Suite",
          paragraph:
            " With a panoramic view overlooking our grounds and direct access to the south facing porch, the Master Suite provides warmth and brightness for a peaceful getaway.",
          view: "View Details",
        },
      ],
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
