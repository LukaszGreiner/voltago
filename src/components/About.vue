<script setup>
import DashedSpline from "./decorative/DashedSpline.vue";
import AboutList from "./about/AboutList.vue";
import ScooterTiles from "./About/ScooterTiles.vue";
import ScootersImg from "./About/ScootersImg.vue";
</script>

<template>
  <!--About section-->
  <section class="grid justify-center">
    <DashedSpline />
    <ScootersImg class="relative mt-20" />
    <AboutList />
    <ScooterTiles />
  </section>
</template>
