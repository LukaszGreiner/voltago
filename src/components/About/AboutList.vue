<script setup>
import AboutItem from "./AboutItem.vue";

const aboutList = [
  "Perfekt für Azubis, Studenten und gestresste Stadtbewohner",
  "Zugelassen für 2 Personen",
  "Als Mofa mit 25km/h, mit 45km/h und Führerschein AM oder schneller mit A1",
  "Mit Home-Charging – d.h. Lithium-Ionen Aklku sofort entnehmbar!",
  "Reichweite pro Akku bis zu 65km, max. 3 Akkus on board",
  "Inkl. Gepäckträger und Top-Case",
];
</script>

<template>
  <!-- About list -->
  <div class="mb-14 lg:mb-0 lg:mr-16">
    <h2
      class="text-2xl lg:text-[32px] lg:leading-[44px] lg:relative lg:-left-[125px] lg:-top-10 lg:whitespace-nowrap"
    >
      Das ist Dein Ticket für die Freiheit:
    </h2>
    <ul
      class="text-base md:text-lg md:leading-6 lg:leading-[26px] mb-4 space-y-4 lg:space-y-5"
    >
      <li v-for="line in aboutList" :key="line">
        <AboutItem>{{ line }}</AboutItem>
      </li>
    </ul>
  </div>
</template>
