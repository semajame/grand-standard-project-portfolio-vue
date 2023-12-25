import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import style from "./styles/style.css";
import reset from "./styles/reset.css";
import header from "./styles/header.css";
import about from "./styles/about.css";
import contact from "./styles/contact.css";
import stay from "./styles/stay.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
