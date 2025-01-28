import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import ShoppingView1 from "./views/ShoppingView1.vue";
import ShoppingView2 from "./views/ShoppingView2.vue";
import ShoppingView3 from "./views/ShoppingView3.vue";
import ShoppingView4 from "./views/ShoppingView4.vue";
import Homepage from "./views/Homepage.vue";
import TestingComponentsView from "./views/TestingComponentsView.vue";

const routes = [
  { path: "/", name: "home", component: Homepage },
  { path: "/ShoppingView1", component: ShoppingView1 },
  { path: "/ShoppingView2", component: ShoppingView2 },
  { path: "/ShoppingView3", component: ShoppingView3 },
  { path: "/ShoppingView4", component: ShoppingView4 },
  { path: "/TestingComponents", component: TestingComponentsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
