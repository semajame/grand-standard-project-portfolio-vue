import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import style from "./styles/style.css?module";
import reset from "./styles/reset.css?module";
import header from "./styles/header.css?module";
import about from "./styles/about.css?module";
import contact from "./styles/contact.css?module";
import stay from "./styles/stay.css?module";

const app = createApp(App);

app.use(router);

app.mount("#app");
