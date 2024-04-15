<template>
  <main>
    <div class="hero__container">
      <h1>Dinner Menu</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </div>
    <div class="dine__img__container dinner"></div>
  </main>
  <section>
    <div>
      <h2>STARTERS</h2>

      <div class="menu__container">
        <div class="menu__item" v-for="(item, index) in starters" :key="index">
          <div>
            <h3>
              {{ item.menu }}
            </h3>
            <p>
              {{ item.details }}
            </p>
          </div>
          <div>
            <p>${{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2>SALADS</h2>
      <div class="menu__container">
        <div class="menu__item" v-for="(item, index) in salads" :key="index">
          <div>
            <h3>
              {{ item.menu }}
            </h3>
            <p>
              {{ item.details }}
            </p>
          </div>
          <div>
            <p>${{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2>ENTRÉES</h2>
      <div class="menu__container">
        <div class="menu__item" v-for="(item, index) in entrees" :key="index">
          <div>
            <h3>
              {{ item.menu }}
            </h3>
            <p>
              {{ item.details }}
            </p>
          </div>
          <div>
            <p>${{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2>DESSERT</h2>
      <div class="menu__container">
        <div class="menu__item" v-for="(item, index) in desserts" :key="index">
          <div>
            <h3>
              {{ item.menu }}
            </h3>
            <p>
              {{ item.details }}
            </p>
          </div>
          <div>
            <p>${{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const starters = [
  {
    menu: "Daily Soup",
    details:
      "Each Day Our Crafty Lunch Ladies Whip Up a Schoolkid Classic, Ask Your Server About Today's Delicious Feature",
    price: 8,
  },
];

const salads = [
  {
    menu: "The New Cobb",
    details:
      "romaine + kale, double smoked bacon, soft-boiled egg, grilled chicken breast, Grana Padano dressing",
    price: 21,
  },
  {
    menu: "Farmers Market Chicken",
    details:
      "grilled chicken breast, fresh corn, emerald kale, toasted almonds, aged white cheddar",
    price: 25,
  },
  {
    menu: "Katsu Chicken Peanut Salad",
    details:
      "crispy chicken breast, julienne vegetables, arugula, miso ginger dressing",
    price: 15.75,
  },
];

const entrees = [
  {
    menu: "Bombay Butter Chicken",
    details: "aromatic basmati rice, house baked naan",
    price: 20.25,
  },
  {
    menu: "Spaghetti Pomodoro",
    details:
      "Calabrian chili spiked tomato sauce, whipped ricotta, fresh basil, parmesan",
    price: 18.25,
  },
  {
    menu: "Korean Fried Cauliflower Rice Bowl",
    details: "sweet + spicy korean chili sauce, mint slaw, kimchi",
    price: 15,
  },
];

const desserts = [
  {
    menu: "Warm Italian Donuts",
    details: "vanilla + mascarpone cream, lemon curd",
    price: 9,
  },
  {
    menu: "Molten Chocolate Cake",
    details: "fresh raspberries, Tahitian vanilla ice cream",
    price: 10.25,
  },
  {
    menu: "Individually Baked Apple Pie",
    details: "hand-folded pastry, toasted almonds, Canadian maple ice cream",
    price: 15,
  },
];
</script>

<style scoped>
@import url("/src/styles/menu.css");
</style>
