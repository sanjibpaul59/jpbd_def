import { createApp } from "vue";
import App from "./App.vue";
import "./styles/global.css";
import { injectSpeedInsights } from "@vercel/speed-insights";

createApp(App).mount("#app");
injectSpeedInsights();
