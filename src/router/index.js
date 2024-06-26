import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Stay from "../views/Stay.vue";
import Dine from "../views/Dine.vue";
import Contacts from "../views/Contacts.vue";
import NotFound from "../views/NotFound.vue";

// rooms
import Junior from "../views/rooms/Junior.vue";
import Master from "../views/rooms/Master.vue";
import Executive from "../views/rooms/Executive.vue";

// menu

import Drinks from "../views/dine/Drink.vue";
import Dinner from "../views/dine/Dinner.vue";
import Lunch from "../views/dine/Lunch.vue";

import { headerNavClose } from "../headerNavClose";
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
  {
    path: "/stay/junior-suite",
    name: "junior",
    component: Junior,
  },
  {
    path: "/stay/master-suite",
    name: "master",
    component: Master,
  },
  {
    path: "/stay/executive-suite",
    name: "executive",
    component: Executive,
  },
  {
    path: "/dine/drinks",
    name: "drinks",
    component: Drinks,
  },
  {
    path: "/dine/dinner",
    name: "dinner",
    component: Dinner,
  },
  {
    path: "/dine/lunch",
    name: "lunch",
    component: Lunch,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
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
  headerNavClose();
});

export default router;
