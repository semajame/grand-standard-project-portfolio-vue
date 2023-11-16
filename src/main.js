import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import style from "./styles/style.css";
import reset from "./styles/reset.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
