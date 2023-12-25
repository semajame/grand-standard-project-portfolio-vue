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

  <h2 class="menuHeader">Explore Our Menu</h2>

  <div class="stay__suites__container dine__suites__container">
    <div
      class="stay__suites__content"
      v-for="(items, index) in dineMenus"
      :key="index"
    >
      <div class="left__suites">
        <img :src="items.img" alt="Suite Room Image" />
      </div>
      <div class="right__suites">
        <div class="right__top">
          <h3>{{ items.header }}</h3>
          <p>
            {{ items.paragraph }}
          </p>
        </div>
        <div class="right__bottom">
          <span> {{ items.roomBed }} </span>
        </div>

        <router-link :to="{ name: 'dine' }" class="more__information">{{
          items.moreInfo
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { toggleKnow } from "../scrollUtils";

export default {
  data() {
    return {
      dineSpan: "Dine with Us",
      dineHeader: "Eat like a king at one of the city's best.",
      dineButton: "Browse our Menu",
      aboutHeader: '"A flavour tour around the world, in a single night."',
      aboutSpan: "Recent Guest",

      dineMenus: [
        {
          img: "https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e3f659a85059f2be878cb4a_group-of-people-doing-cheers-544961-thumb-p-800.jpeg",
          header: "Drink Menu",
          paragraph:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          view: "View Details",
          moreInfo: "More Information",
        },
        {
          img: "https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e3f654f84ad29260cf8e430_close-up-of-meal-served-in-plate-306059-p-800.jpeg",

          header: "Dinner Menu",
          paragraph:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          view: "View Details",
          moreInfo: "More Information",
        },
        {
          img: " https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e3f651453cb2bb83ea03fd5_food-dinner-lunch-unhealthy-70497-thumb-p-500.jpeg",
          header: "Lunch Menu",
          paragraph:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          view: "View Details",
          moreInfo: "More Information",
        },
      ],
    };
  },

  methods: {
    toggleKnow,
  },
};
</script>

<style scoped>
.menuHeader {
  text-align: center;
  font-size: 2rem;
}

.room__suites__container {
  padding: 12rem 2rem 15rem 2rem;
}
</style>
