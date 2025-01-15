<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import MobileMenu from "./components/MobileMenu.vue";
import About from "./components/About.vue";
import Models from "./components/Models.vue";

const isMenuOpen = ref(false);
</script>

<template>
  <div class="bg-tlo-jasne px-4">
    <Header @openMenu="isMenuOpen = true" />
    <MobileMenu v-if="isMenuOpen" @closeMenu="isMenuOpen = false" />
    <Main />
    <About />
    <Models />
    <DrivingLicence />

    <div class="grid place-items-center">
      <img src="./assets/img/scooter-1.png" alt="scooter front view" />
      <p>Bis 45 Km/h</p>
      <p>Geschwindigkeit</p>
    </div>

    <div class="grid place-items-center">
      <img src="./assets/img/scooter-2.png" alt="scooter side view" />
      <p>Bis 13 Grad</p>
      <p>Steigung</p>
    </div>

    <div class="grid place-items-center">
      <img src="./assets/img/scooter-3.png" alt="scooter back view" />
      <p>1200 Watt</p>
      <p>Leistung</p>
    </div>
  </div>
</template>

<style scoped></style>
