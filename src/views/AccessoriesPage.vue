<script setup>
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import ToggleCard from "@/components/Shopping/ToggleCard.vue";
import BackBtn from "@/components/utils/BackBtn.vue";

const scooterAccessories = [
  {
    name: "BE – Batterie-Erweiterung",
    isChecked: false, // toggle Button state
    accordionText: "lorem ipsum dolor sit ament",
    accordionOpen: false,
    priceWithoutAssembly: 699,
    priceWithAssembly: 714,
    optionSelected: "2", // '1' or '2' sets radio button checked as default
  },
  {
    name: "CB - Sitzbank Farbe abweichend (ggf. Lieferzeit - Lieferung schwarz / Tausch später)",
    priceWithoutAssembly: 215,
    priceWithAssembly: 315,
  },
  {
    name: "ER – Easy Rider option",
    priceWithoutAssembly: 199,
    priceWithAssembly: 250,
    accordionText:
      "Rahmenschutz mit integrierten Fußbügeln für maximalen Fahrkomfort und Easy Rider Feeling (Option HL wird empfohlen mit dieser Option)",
  },
  {
    name: "HL – Hoher Lenker",
    priceWithoutAssembly: 80,
    priceWithAssembly: 110,
    accordionText: "lorem ipsum dolor sit ament",
  },
  {
    name: "HS – Hohe Sitzbank",
    priceWithoutAssembly: 357,
    priceWithAssembly: 399,
    accordionText: "lorem ipsum dolor sit ament",
  },
  {
    name: "HB – Handy Box",
    priceWithoutAssembly: 24,
    priceWithAssembly: 50,
    accordionText: "lorem ipsum dolor sit ament",
  },
  {
    name: "LT36 – XL Large Topcase",
    priceWithoutAssembly: 131,
    priceWithAssembly: 200,
    accordionText: "lorem ipsum dolor sit ament",
  },
  {
    name: "LT48 – XXL Large Topcase",
    priceWithoutAssembly: 119,
    priceWithAssembly: 200,
    accordionText: "lorem ipsum dolor sit ament",
  },
  {
    name: "QS-Quick Snap Halterung",
    priceWithoutAssembly: 60,
    priceWithAssembly: 110,
    accordionText: "lorem ipsum dolor sit ament",
  },
];
</script>

<template>
  <ShoppingLayout currentStep="2" nextPage="orderdetailspage">
    <template #main>
      <section
        class="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-4"
      >
        <ToggleCard
          v-for="(accessory, index) in scooterAccessories"
          :key="index"
          :name="accessory.name"
          :minPrice="accessory.priceWithoutAssembly"
          :checked="accessory.isChecked"
          :priceWithoutAssembly="accessory.priceWithoutAssembly"
          :priceWithAssembly="accessory.priceWithAssembly"
          :accordionText="accessory.accordionText"
          :accordionOpen="accessory.accordionOpen"
          :optionSelected="accessory.optionSelected"
        />
      </section>
      <BackBtn />
    </template>
  </ShoppingLayout>
</template>
