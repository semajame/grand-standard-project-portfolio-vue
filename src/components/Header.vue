<template>
  <header class="header" :style="{ headerStyle: backgroundColor }">
    <div class="left__header">
      <router-link to="/">
        <img :src="logo" alt="Logo" class="logo__img" />
      </router-link>
    </div>

    <div class="right__header">
      <nav>
        <ul>
          <li v-for="items in routerLinks" :key="items.name">
            <router-link :to="{ name: items.name }" class="router__link">
              {{ items.link }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      logo: "https://uploads-ssl.webflow.com/5e13a534946b1253f7c522a4/5e3c0df17383a87005e25170_Logo%20(Light).svg",

      headerStyle: {
        backgroundColor: "rgba(255, 255, 255, 0)",
      },

      routerLinks: [
        {
          name: "stay",
          link: "Stay",
        },
        {
          name: "dine",
          link: "Dine",
        },
        {
          name: "about",
          link: "About",
        },
        {
          name: "contacts",
          link: "Contact",
        },
      ],
    };
  },

  mounted() {
    window.addEventListener("scroll", this.headerScroll);
  },

  methods: {
    headerScroll() {
      const header = document.querySelector(".header");
      const links = document.querySelectorAll(".router__link");
      const logo = document.querySelector(".logo__img");

      window.addEventListener("scroll", function () {
        const scrollPos = window.scrollY;

        if (scrollPos > 20) {
          // You can adjust this value based on when you want the background to change
          header.style.backgroundColor = "white";
          logo.style.filter = "invert(1)";
          links.forEach((links) => {
            links.style.color = "#235a52";
          });
        } else {
          header.style.backgroundColor = "rgba(255, 255, 255, 0)";
          logo.style.filter = "";
          links.forEach((links) => {
            links.style.color = "";
          });
        }
      });
    },
  },
};
</script>
