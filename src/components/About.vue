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
    <div class="lg:grid lg:grid-cols-2 items-center gap-[62.5px]">
      <ScootersImg class="relative mt-20 lg:mt-0" />
      <AboutList />
    </div>
    <ScooterTiles />
  </section>
</template>
