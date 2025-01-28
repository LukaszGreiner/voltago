<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import MobileMenu from "./components/MobileMenu.vue";
import About from "./components/About.vue";
import Models from "./components/Models.vue";
import Footer from "./components/Footer.vue";
import DrivingLicence from "./components/DrivingLicence.vue";
import ShoppingProgressBar from "./components/Shopping/ShoppingWizard.vue";
import ShoppingView1 from "./views/ShoppingView1.vue";
import ShoppingView2 from "./views/ShoppingView2.vue";
import ShoppingView3 from "./views/ShoppingView3.vue";
import ShoppingView4 from "./views/ShoppingView4.vue";
import TestingComponentsView from "./views/TestingComponentsView.vue";
import DebugNav from "@/components/utils/DebugNav.vue";

const isMenuOpen = ref(false);
</script>

<template>
  <DebugNav />
  <RouterView />
</template>
