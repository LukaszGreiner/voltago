<script setup>
import DrivingLicenceListItem from "./DrivingLicenceListItem.vue";

const DrivingLicenceList = [
  "Perfekt für Azubis, Studenten und gestresste Stadtbewohner",
  "Zugelassen für 2 Personen",
  "Als Mofa mit 25km/h, mit 45km/h und Führerschein AM oder schneller mit A1",
  "Mit Home-Charging – d.h. Lithium-Ionen Aklku sofort entnehmbar!",
  "Reichweite pro Akku bis zu 65km, max. 3 Akkus on board",
  "Inkl. Gepäckträger und Top-Case",
];
</script>

<template>
  <!-- DrivingLicenceList list -->
  <div class="relative">
    <h2
      class="text-[24px] leading-[32px] md:text-[32px] md:leading-[44px] mb-4 xl:absolute xl:-translate-y-[calc(2ch_+_24px)] xl:-translate-x-[120px]"
    >
      Das ist Dein Ticket für die Freiheit:
    </h2>
    <ul
      class="text-[16px] leading-[24px] md:text-[18px] md:leading-[26px] space-y-4 md:space-y-5"
    >
      <li v-for="line in DrivingLicenceList" :key="line">
        <DrivingLicenceListItem>{{ line }}</DrivingLicenceListItem>
      </li>
    </ul>
  </div>
</template>
