<script setup>
import AboutItem from "./AboutItem.vue";
import DashedSpline from "./decorative/DashedSpline.vue";
import MarkDone from "./icons/mark-done.vue";

const aboutContent = [
  "Perfekt für Azubis, Studenten und gestresste Stadtbewohner",
  "Als Mofa mit 25km/h, mit 45km/h und Führerschein AM oder schneller mit A1",
  "Zugelassen für 2 Personen",
  "Als Mofa mit 25km/h, mit 45km/h und Führerschein AM oderschneller mit A1",
  "Mit Home-Charging – d.h. Lithium-Ionen Aklku sofort entnehmbar!",
  "Reichweite pro Akku bis zu 65km, max. 3 Akkus on board",
  "Inkl. Gepäckträger und Top-Case",
];
</script>

<template>
  <!--About section-->
  <section class="grid justify-center">
    <DashedSpline />
    <img
      class="relative mt-20"
      src="../assets/img/scooters.png"
      alt="scooters"
    />

    <h2 class="text-2xl mb-6">Das ist Dein Ticket für die Freiheit:</h2>
    <ul class="text-base mb-4 space-y-4">
      <li v-for="line in aboutContent" :key="line">
        <AboutItem>{{ line }}</AboutItem>
      </li>
    </ul>
  </section>
</template>
