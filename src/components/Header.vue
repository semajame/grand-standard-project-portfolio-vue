<template>
  <header class="header">
    <div class="left__header">
      <router-link to="/" class="logo">
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

          <button class="button close" @click="headerNavClose">
            <img :src="close" alt="Menu Icon" />
          </button>
        </ul>

        <button class="button open" @click="headerNav">
          <img :src="menu" alt="Menu Icon" />
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import menu from "../assets/menu.png";
import close from "../assets/close.png";
export default {
  data() {
    return {
      logo: "https://uploads-ssl.webflow.com/5e13a534946b1253f7c522a4/5e3c0df17383a87005e25170_Logo%20(Light).svg",

      menu: menu,
      close: close,

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
    if (
      window.location.href.includes("/dine/drinks") ||
      window.location.href.includes("/dine/dinner") ||
      window.location.href.includes("/dine/lunch")
    ) {
      window.addEventListener("load", this.headerMenus);
    } else {
      window.addEventListener("scroll", this.headerScroll);
    }
  },

  methods: {
    headerScroll() {
      const header = document.querySelector(".header");
      const links = document.querySelectorAll(".router__link");
      const logo = document.querySelector(".logo__img");
      const menu = document.querySelector(".open");

      const scrollPos = window.scrollY;

      if (scrollPos > 20) {
        // You can adjust this value based on when you want the background to change
        header.style.backgroundColor = "white";
        logo.style.filter = "invert(1)";
        menu.style.filter = "invert(0)";
        links.forEach((links) => {
          links.style.color = "#235a52";
        });
      } else {
        header.style.backgroundColor = "rgba(255, 255, 255, 0)";
        logo.style.filter = "";
        menu.style.filter = "";
        links.forEach((links) => {
          links.style.color = "";
        });
      }
    },

    headerMenus() {
      const header = document.querySelector(".header");
      const links = document.querySelectorAll(".router__link");
      const logo = document.querySelector(".logo__img");
      const menu = document.querySelector(".open");
      const tabTitle = window.location.href;

      if (
        tabTitle.includes("/dine/drinks") ||
        tabTitle.includes("/dine/lunch") ||
        tabTitle.includes("/dine/dinner")
      ) {
        header.style.backgroundColor = "white";
        logo.style.filter = "invert(1)";
        menu.style.filter = "invert(0)";
        links.forEach((link) => {
          link.style.color = "#235a52";
        });
        console.log("test");
        console.log(tabTitle);
      }
    },

    headerNav() {
      const ul = document.querySelector("ul");
      ul.classList.add("active");

      const logo = document.querySelector(".logo__img");

      if (true) {
        logo.style.filter = "invert(1)";
      }
    },

    headerNavClose() {
      const ul = document.querySelector("ul");
      ul.classList.remove("active");

      const scrollPos = window.scrollY;

      const logo = document.querySelector(".logo__img");

      if (scrollPos > 20) {
        logo.style.filter = "invert(1)";
      } else {
        logo.style.filter = "invert(0)";
      }
    },
  },
};
</script>
