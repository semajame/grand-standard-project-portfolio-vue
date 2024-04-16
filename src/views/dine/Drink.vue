<template>
  <main>
    <div class="hero__container">
      <h1>Drink Menu</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </div>
    <div class="dine__img__container"></div>
  </main>
  <section>
    <div>
      <h2>Wine</h2>

      <div class="menu__container">
        <div class="menu__item" v-for="(item, index) in menu" :key="index">
          <div>
            <h3>
              {{ item.menu }}
            </h3>
            <p>
              {{ item.details }}
            </p>
          </div>
          <div>
            <p class="price">${{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2>Beer</h2>
      <div class="menu__container">
        <div class="menu__item" v-for="(item, index) in beer" :key="index">
          <div>
            <h3>
              {{ item.menu }}
            </h3>
          </div>
          <div>
            <p class="price">${{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2>Cocktails</h2>
      <div class="menu__container">
        <div class="menu__item" v-for="(item, index) in cocktails" :key="index">
          <div>
            <h3>
              {{ item.menu }}
            </h3>
            <p>
              {{ item.details }}
            </p>
          </div>
          <div>
            <p class="price">${{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const menu = [
  {
    menu: "Tawse 'Spark' Brut - Niagara, Ontario",
    details: "Outstanding local bubbles from one of Canada's top wineries",
    price: 65,
  },
  {
    menu: "Tenuta Santome Prosecco - Veneto, Italy",
    details:
      "Bright, fruity & refined expression from this renowned Prosecco estate",
    price: 45,
  },
  {
    menu: "Freixenet Cava - Spain",
    details:
      "Your perfect aperitif - a little splash of the ultra-fresh, bone-dry bubbles of Spain",
    price: 75,
  },
];

const beer = [
  {
    menu: "Brickworks 'Batch 1904' Cider",
    price: 8.25,
  },
  {
    menu: "Sapporo Lager",
    price: 8.25,
  },
  {
    menu: "Shawn and Ed Lagershed 'Lighter' Lager",
    price: 7.75,
  },
];

const cocktails = [
  {
    menu: "Moscow Mule",
    details: "1.5oz Smirnoff vodka, Fever Tree ginger beer, lemon-lime slush",
    price: 10.25,
  },
  {
    menu: "Spicy Passionfruit Margarita",
    details: "1.5 oz spicy tequila, lime juice, passionfruit, egg white",
    price: 11.25,
  },
  {
    menu: "Real Peach Bellini",
    details:
      "1oz Appleton Estate Signature Blend rum, real peach molasses, sparking wine, sangria",
    price: 8.25,
  },
];
</script>

<style scoped>
@import url("/src/styles/menu.css");
</style>
