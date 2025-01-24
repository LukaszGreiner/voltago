<script setup>
import ShoppingFooter from "@/components/Shopping/ShoppingFooter.vue";
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import ToggleCard from "@/components/Shopping/ToggleCard.vue";
import Button from "@/components/utils/Button.vue";
import { ref } from "vue";

const scooterAccessories = [
  {
    name: "BE – Batterie-Erweiterung",
    minPrice: "699",
    isChecked: false, // toggle button state
    accordionText: "lorem ipsum dolor sit ament",
    accordionOpen: false,
    priceWithAssembly: "699",
    priceWithoutAssembly: "714",
    optionSelected: "2", // '1' or '2' sets radio button checked as default
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
  <ShoppingLayout>
    <template #header>
      <ShoppingHeader currentStep="2" />
    </template>

    <template #main>
      <section
        class="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-4"
      >
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
      <Button
        class="mt-12 mb-16 mr-auto px-0 text-[16px]"
        btnType="tertiary"
        :arrow-left="true"
        >Zurück</Button
      >
    </template>

    <template #footer>
      <ShoppingFooter :total-price="0" />
    </template>
  </ShoppingLayout>
</template>
