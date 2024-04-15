<template>
  <div class="home__overlay"></div>
  <div class="container">
    <div class="banner__container">
      <h1>Master Suite</h1>
      <span class="suite__span"> STARTING AT $200/NIGHT </span>
      <p>
        With a panoramic view overlooking our grounds and direct access to the
        south facing porch, the Master Suite provides warmth and brightness for
        a peaceful getaway.
      </p>
    </div>
  </div>
  <div class="room__container">
    <div class="left">
      <img
        src="https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e3f5e90b61d397b3522d68e_ralph-kayden-FqqiAvJejto-unsplash.jpg"
        alt="Master Suite"
      />
    </div>
    <div class="right">
      <p>
        Our Master Room welcomes you to a showcase of modern convenience and
        stylish décor. Beautifully furnished with our king-size or twin beds
        topped with duvet covers and soft pillows, an Ottoman set, a functional
        writing desk, a mini refrigerator, a 40-inch state-of-the-art
        Interactive Protocol TV (IPTV) with a selection of local and
        international cable/satellite channels, and complimentary high-speed
        wireless internet access.
      </p>

      <div class="amenities">
        <div v-for="items in amenities" :key="items" class="icon__holder">
          <img :src="items.img" alt="" />
          <span class="amenities-span">{{ items.name }}</span>
        </div>
      </div>

      <button>Book Now</button>
    </div>
  </div>
</template>

<script setup>
const amenities = [
  {
    img: "https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e2719b58b822d24612ebee7_Icon.svg",
    name: "Wifi",
  },
  {
    img: "https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e2719c58b822d127d2ebf2e_Icon.svg",
    name: "TV",
  },
  {
    img: "https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e2719d99db6c9144330e4c9_Icon.svg",
    name: "Desk & Chair",
  },
  {
    img: "https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e271a886f517bba95ac9c2a_Icon.svg",
    name: "Balcony",
  },
];
</script>

<style scoped>
@import url("/src/styles/rooms.css");
</style>
