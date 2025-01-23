<script setup lang="ts">
import ShoppingFooter from "@/components/Shopping/ShoppingFooter.vue";
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingProgressBar from "@/components/Shopping/ShoppingProgressBar.vue";
import ShoppingProgressSection from "@/components/Shopping/ShoppingProgressSection.vue";
import ToggleCard from "@/components/Shopping/ToggleCard.vue";

const scooterAccessories = [
  {},
  {
    name: "BE – Batterie-Erweiterung",
    minPrice: "699",
    accordionText: "lorem ipsum dolor sit ament",
    priceWithAssembly: "699",
    priceWithoutAssembly: "714",
  },
  {
    name: "CB - Sitzbank Farbe abweichend (ggf. Lieferzeit - Lieferung schwarz / Tausch später)",
    minPrice: "215",
    priceWithAssembly: "215",
    priceWithoutAssembly: "215",
  },
  {
    name: "ER – Easy Rider option",
    minPrice: "80",
    accordionText:
      "Rahmenschutz mit integrierten Fußbügeln für maximalen Fahrkomfort und Easy Rider Feeling (Option HL wird empfohlen mit dieser Option)",
  },
  {
    name: "HL – Hoher Lenker",
    minPrice: "80",
    accordionText: "lorem ipsum dolor sit ament",
  },
  {
    name: "HS – Hohe Sitzbank",
    minPrice: "357",
    accordionText: "lorem ipsum dolor sit ament",
  },
  {
    name: "HB – Handy Box",
    minPrice: "24",
    accordionText: "lorem ipsum dolor sit ament",
  },
  {
    name: "LT36 – XL Large Topcase",
    minPrice: "131",
    accordionText: "lorem ipsum dolor sit ament",
  },
  {
    name: "LT48 – XXL Large Topcase",
    minPrice: "119",
    accordionText: "lorem ipsum dolor sit ament",
  },
  {
    name: "QS-Quick Snap Halterung",
    minPrice: "60",
    accordionText: "lorem ipsum dolor sit ament",
  },
];
</script>

<template>
  <ShoppingHeader />
  <ShoppingProgressSection>
    <ShoppingProgressBar />
  </ShoppingProgressSection>
  <section class="grid gap-4">
    <ToggleCard
      v-for="(accessory, index) in scooterAccessories"
      :key="index"
      :name="accessory.name"
      :minPrice="accessory.minPrice"
      :isChecked="accessory.isChecked"
      :priceWithoutAssembly="accessory.priceWithoutAssembly"
      :priceWithAssembly="accessory.priceWithAssembly"
      :accordionText="accessory.accordionText"
      :accordionOpen="accessory.accordionOpen"
      :optionSelected="accessory.optionSelected"
    />
  </section>
  <ShoppingFooter />
</template>
