<template>
  <footer>
    <router-link to="/" class="footer__logo">
      <img
        src="https://uploads-ssl.webflow.com/5e13a534946b1253f7c522a4/5e3c0df17383a87005e25170_Logo%20(Light).svg"
        alt="Footer Logo"
      />
    </router-link>

    <p>
      {{ footerP }}
    </p>

    <router-link :to="{ name: 'contacts' }" class="footer__contact">{{
      footerContact
    }}</router-link>

    <div class="footer__nav">
      <nav>
        <ul>
          <li v-for="(items, index) in navLinks" :key="index">
            <router-link :to="items.name" class="footer__router">
              {{ items.link }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="footer__socials">
      <div class="footer__left">
        <span> {{ footerSpan }} </span>
      </div>
      <div class="footer__right">
        <a href="https://www.facebook.com/" target="_blank">Facebook</a>
        <a href="https://twitter.com/" target="_blank">Twitter</a>
        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          name: "/stay",
          link: "Stay",
        },
        {
          name: "/dine",
          link: "Dine",
        },
        {
          name: "/about",
          link: "About",
        },
      ],

      footerP:
        "   The Grand Standard offers peace and serenity to working professionals who appreciate exceptional experiences and service.",
      footerContact: "Contact Us",
      footerSpan: "© Grand Standard Inc 2020. All rights reserved.",
    };
  },
};
</script>

<style></style>
