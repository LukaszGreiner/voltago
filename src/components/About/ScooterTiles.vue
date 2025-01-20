<script setup>
import DashedSpline from "../decorative/DashedSpline.vue";
import DashedSplineHorizontal from "../decorative/DashedSplineHorizontal.vue";
import DashedSplineVertical from "../decorative/DashedSplineVertical.vue";
import ScooterTile from "./ScooterTile.vue";
</script>

<template>
  <!-- Scooter Tiles -->

  <div class="grid gap-14 my-14 md:flex mx-auto">
    <!-- Splines are hidden by CSS -->
    <DashedSplineVertical
      class="absolute md:hidden left-1/2 -translate-x-1/2 -mt-16"
    />
    <DashedSplineHorizontal class="hidden md:block absolute mt-[10.5rem]" />

    <ScooterTile
      text1="Bis 45 Km/h"
      text2="Geschwindigkeit"
      img="/src/assets/img/scooter-1.png"
      alt="scooter front view"
    />
    <ScooterTile
      text1="Bis 13 Grad"
      text2="Steigung"
      img="/src/assets/img/scooter-2.png"
      alt="scooter side view"
    />
    <ScooterTile
      text1="1200 Watt"
      text2="Leistung"
      img="/src/assets/img/scooter-3.png"
      alt="scooter back view"
    />
  </div>
</template>
