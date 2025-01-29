import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import YourScooterPage from "@/views/YourScooterPage.vue";
import AccessoriesPage from "./views/Accessoriespage.vue";
import OrderDetailsPage from "@/views/OrderDetailsPage.vue";
import SummaryPage from "@/views/SummaryPage.vue";
import TestingComponentsPage from "@/views/TestingComponentsPage.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/YourScooterPage", component: YourScooterPage },
  { path: "/AccessoriesPage", component: AccessoriesPage },
  { path: "/OrderDetailsPage", component: OrderDetailsPage },
  { path: "/SummaryPage", component: SummaryPage },
  { path: "/TestingComponentsPage", component: TestingComponentsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
