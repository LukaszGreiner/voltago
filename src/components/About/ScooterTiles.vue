<script setup>
import DashedSpline from "../decorative/DashedSpline.vue";
import DashedSplineHorizontal from "../decorative/DashedSplineHorizontal.vue";
import DashedSplineVertical from "../decorative/DashedSplineVertical.vue";
import ScooterTile from "./ScooterTile.vue";
import scooter1 from "/img/scooter-1.png";
import scooter2 from "/img/scooter-2.png";
import scooter3 from "/img/scooter-3.png";
</script>

<template>
  <!-- Scooter Tiles -->

  <div class="grid gap-14 my-14 md:flex mx-auto">
    <!-- Splines are hidden by CSS -->
    <dashed-spline-vertical
      class="absolute md:hidden left-1/2 -translate-x-1/2 -mt-16"
    />
    <dashed-spline-horizontal class="hidden md:block absolute mt-[10.5rem]" />

    <ScooterTile
      text1="Bis 45 Km/h"
      text2="Geschwindigkeit"
      :img="scooter1"
      alt="scooter front view"
    />
    <ScooterTile
      text1="Bis 13 Grad"
      text2="Steigung"
      :img="scooter2"
      alt="scooter side view"
    />
    <ScooterTile
      text1="1200 Watt"
      text2="Leistung"
      :img="scooter3"
      alt="scooter back view"
    />
  </div>
</template>
