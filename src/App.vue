<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import MobileMenu from "./components/MobileMenu.vue";
import About from "./components/About.vue";
import Models from "./components/Models.vue";
import ScooterTile from "./components/About/ScooterTile.vue";
import ScootersComparison from "./components/Models/ScootersComparison.vue";
import Footer from "./components/Footer.vue";

const isMenuOpen = ref(false);
</script>

<template>
  <div class="bg-tlo-jasne">
    <Header @openMenu="isMenuOpen = true" />
    <MobileMenu v-if="isMenuOpen" @closeMenu="isMenuOpen = false" />
    <Main />
    <About />
    <Models />
    <DrivingLicence />
    <Footer />
  </div>
</template>
