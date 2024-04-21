// Composables
import { createRouter, createWebHistory } from "vue-router";
import paths from "./paths";

const router = createRouter({
  history: createWebHistory(),
  routes: paths,
});

export default router;
