<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import MobileMenu from "./components/MobileMenu.vue";
import About from "./components/About.vue";
import Models from "./components/Models.vue";
import ScooterTile from "./components/About/ScooterTile.vue";

const isMenuOpen = ref(false);
</script>

<template>
  <div class="bg-tlo-jasne px-4 md:px-12 lg:px-20">
    <Header @openMenu="isMenuOpen = true" />
    <MobileMenu v-if="isMenuOpen" @closeMenu="isMenuOpen = false" />
    <Main />
    <About />
    <Models />
    <DrivingLicence />
  </div>
</template>

<style scoped></style>
