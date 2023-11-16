import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Stay from "../views/Stay.vue";
import Dine from "../views/Dine.vue";
import Contacts from "../views/Contacts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dine",
    name: "dine",
    component: Dine,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/stay",
    name: "stay",
    component: Stay,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
  next();
});

export default router;
