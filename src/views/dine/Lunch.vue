<template>
  <main>
    <div class="hero__container">
      <h1>Lunch Menu</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </div>
    <div class="dine__img__container lunch"></div>
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
      <h2>Healthy Bowls</h2>
      <div class="menu__container">
        <div
          class="menu__item"
          v-for="(item, index) in healthyBowls"
          :key="index"
        >
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
      <h2>SANDWHICHES</h2>
      <div class="menu__container">
        <div
          class="menu__item"
          v-for="(item, index) in sandwhiches"
          :key="index"
        >
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
      <h2>EXTRAS</h2>
      <div class="menu__container">
        <div class="menu__item" v-for="(item, index) in extras" :key="index">
          <div>
            <h3>
              {{ item.menu }}
            </h3>
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
    menu: "Pep Rally Nachos Soup",
    details:
      "Crispy Corn Tortillas Layered w/ Sugar Cured Bacon & House Cheese Blend, Topped w/ Jalapeno Sour Cream, Tomato + Chives",
    price: 15,
  },
  {
    menu: "Daily Soup",
    details:
      "Each Day Our Crafty Lunch Ladies Whip Up a Schoolkid Classic, Ask Your Server About Today's Delicious Feature",
    price: 8,
  },
  {
    menu: "Baby Greens",
    details: "Mixed Kale + Arugula, Tomato Chutney + Cider Vinaigrette",
    price: 9,
  },
];

const healthyBowls = [
  {
    menu: "Warm Cauliflower Bowl",
    details:
      "w/ Arugula + Roasted Kale, Curried Rice, Candy Cane Beets, Crispy Chickpeas + Tahini Vinaigrette",
    price: 17.5,
  },
  {
    menu: "Kail! Caesar",
    details:
      "SCHOOL'd Kale, Crispy Leeks & Capers, Polenta Croûtons + Avocado & Cashew Caesar Dressing",
    price: 18,
  },
  {
    menu: "Health 101 Bowl",
    details:
      "w/ Marinated Kale, Red Quinoa, Avocado, Spiced Nuts, Roasted Tomato Chutney + Cider Vinaigrette",
    price: 20,
  },
];

const sandwhiches = [
  {
    menu: "Homeroom Classic",
    details:
      "Our Daily Soup Feature w/ Toasted Sourdough & Mixed Kale + Arugula Salad Tossed in Cider Vinaigrette",
    price: 16.25,
  },
  {
    menu: "The Hall Monitor",
    details:
      "Crispy Fried Chicken Breast Tossed in Hot Honey on a Toasted Bun w/ Shredded Iceberg, Tomato, Pickles + Spicy Aioli",
    price: 18.25,
  },
  {
    menu: "Spinach + Artichoke Grilled Cheese",
    details: "w/ Shredded Parmesan + Gooey Mozzarella on Crispy Sourdough",
    price: 15,
  },
];

const extras = [
  {
    menu: "Side Kale and Arugula Salad House",
    price: 9,
  },
  {
    menu: "Buttermilk Fried Chicken",
    price: 10.25,
  },
];
</script>

<style scoped>
@import url("/src/styles/menu.css");
</style>
