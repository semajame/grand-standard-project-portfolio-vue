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
.container {
  background: url("https://uploads-ssl.webflow.com/5e13ddf1eb497c2211969f6c/5e3f5e90b61d397b3522d68e_ralph-kayden-FqqiAvJejto-unsplash.jpg")
    no-repeat center !important;
  background-size: cover !important;
  height: 500px;
  background-attachment: fixed !important;
  text-align: center;
  padding: 10rem 0;
}

.banner__container {
  position: relative;
  z-index: 99;
}

h1 {
  font-size: 5rem;
  color: white;
  font-weight: 400;
}

.suite__span {
  margin: 2rem 0;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  color: white;
}

p {
  max-width: 700px;
  margin: 2rem auto 0 auto;
  font-family: "Lato", sans-serif;
  color: white;
}

.right p {
  color: black;
}

.room__container {
  padding: 3rem 5rem;
  display: flex;
  gap: 5rem;
}

.left img {
  width: 400px;
  height: 400px;
  object-fit: cover;
}

.amenities {
  margin: 3rem 0 2rem 0;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 1vw;
  grid-row-gap: 2vw;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

.icon__holder {
  display: flex;
  gap: 0.5rem;

  align-items: center;
  flex-direction: column;
}

.amenities div img {
  width: 35px;
  height: 35px;
}

.amenities-span {
  font-size: 0.9rem;
}

button {
  padding: 1rem 2rem;
  background-color: #235a52;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  margin-top: 2rem;
}

.home__overlay {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 500px;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#000),
    color-stop(0%, rgba(0, 0, 0, 0.2)),
    to(rgba(0, 0, 0, 0.75))
  );
}
</style>
