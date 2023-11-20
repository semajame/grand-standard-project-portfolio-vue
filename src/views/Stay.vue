<template>
  <div class="home__overlay"></div>
  <main class="stay__hero">
    <div class="hero__content">
      <span> {{ stayWelcome }} </span>

      <h1>{{ stayHeader }}</h1>
      <button class="explore__hotel" @click="toggleKnow">
        {{ stayButton }}
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

  <div class="stay__suites__container">
    <div
      class="stay__suites__content"
      v-for="(items, index) in suites"
      :key="index"
    >
      <div class="left__suites">
        <img :src="items.roomImg" alt="Suite Room Image" />
      </div>
      <div class="right__suites">
        <div class="right__top">
          <h3>{{ items.roomName }}</h3>
          <p>
            {{ items.roomP }}
          </p>
          <div class="price__container">
            <span class="price">{{ items.roomUsd }}</span> /
            <span class="night">NIGHT</span>
          </div>
        </div>
        <div class="right__bottom">
          <div class="description">
            <img
              src="https://assets-global.website-files.com/644be2808c71a50680612eed/64a4458e3134eb3674e3d537_icon-guests-suite-x-webflow-template.svg"
              alt=""
            />
            <span> {{ items.roomGuests }} </span>
          </div>

          <div class="vertical__line"></div>
          <div class="description">
            <img
              src="https://assets-global.website-files.com/644be2808c71a50680612eed/64a4458edb01effb895fbd0f_icon-beds-suite-x-webflow-template.svg"
              alt=""
            />
            <span> {{ items.roomBed }} </span>
          </div>
        </div>

        <router-link :to="{ name: 'stay' }" class="more__information">{{
          items.moreInfo
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stayWelcome: "Stay with us",
      stayHeader: "Attention to detail like never before.",
      stayButton: "Explore our Hotel",
      aboutSpan: "Recent Guest",
      aboutHeader:
        '"I only get to come home once a year. When we have our annual conference at the Grand Standard"',

      suites: [
        {
          roomImg:
            " https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e3f5a1884ad292259f8b852_a-simple-bedroom-3659683-thumb-p-500.jpeg",
          roomName: "Junior Suite",
          roomP:
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe pariatur ipsa autem dignissimos sapiente. Ipsa sapiente aspernatur asperiores in",
          roomUsd: "$120.00 USD",
          moreInfo: "More Information",
          roomGuests: "2 Guest",
          roomBed: "1 Queen Bed",
        },
        {
          roomImg:
            "https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e3f5eab53cb2b1214a00d4d_ralph-kayden-FqqiAvJejto-unsplash-thumb-p-500.jpeg",
          roomName: "Master Suite",
          roomP:
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe pariatur ipsa autem dignissimos sapiente. Ipsa sapiente aspernatur asperiores in",
          roomUsd: "$200.00 USD",
          moreInfo: "More Information",
          roomGuests: "4 Guest",
          roomBed: "2 Queen Bed",
        },
        {
          roomImg:
            " https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e3f5f35eb1a90214a28ea05_apartment-bed-bedroom-chair-271618-thumb-p-500.jpeg",
          roomName: "Executive Suite",
          roomP:
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe pariatur ipsa autem dignissimos sapiente. Ipsa sapiente aspernatur asperiores in",
          roomUsd: "$400.00 USD",
          moreInfo: "More Information",
          roomGuests: "2 Guest",
          roomBed: "1 King Bed",
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
