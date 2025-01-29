<script setup>
import { ref } from "vue";
import LandingHeader from "../components/LandingHeader.vue";
import MobileMenu from "../components/MobileMenu.vue";
import LandingMain from "../components/LandingMain.vue";
import DrivingLicence from "../components/DrivingLicence.vue";
import About from "../components/About.vue";
import Models from "../components/Models.vue";
import LandingFooter from "../components/LandingFooter.vue";

const isMenuOpen = ref(false);
</script>

<template>
  <LandingHeader @openMenu="isMenuOpen = true" />
  <MobileMenu v-if="isMenuOpen" @closeMenu="isMenuOpen = false" />
  <LandingMain />
  <DrivingLicence />
  <About />
  <Models />
  <LandingFooter />
</template>
