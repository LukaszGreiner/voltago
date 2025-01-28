<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import MobileMenu from "../components/MobileMenu.vue";
import About from "../components/About.vue";
import Models from "../components/Models.vue";
import Footer from "../components/Footer.vue";
import DrivingLicence from "../components/DrivingLicence.vue";

const isMenuOpen = ref(false);
</script>

<template>
  <Header @openMenu="isMenuOpen = true" />
  <MobileMenu v-if="isMenuOpen" @closeMenu="isMenuOpen = false" />
  <Main />
  <DrivingLicence />
  <About />
  <Models />
  <Footer />
</template>
