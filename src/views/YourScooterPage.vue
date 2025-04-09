<script setup>
import ScootersComparison from "@/components/Models/ScootersComparison.vue";
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import BackBtn from "@/components/utils/BackBtn.vue";
import ScooterCard2 from "@/components/Shopping/ScooterCard2.vue";
import Scooters from "@/data/scooters";
</script>

<template>
  <ShoppingLayout currentStep="1" totalPrice="0" nextPage="accessoriespage">
    <template #main>
      <h2 class="block mb-4 text-[18px] leading-[140%] text-center">
        Wählen Sie den Elektroroller für Sie:
      </h2>

      <div class="flex flex-col lg:flex-row items-center gap-4">
        <ScooterCard2
          v-for="(scooter, index) in Scooters"
          :name="scooter.name"
          :key="scooter.model"
          :model="scooter.model"
          :basePrice="scooter.basePrice"
          :priceWithAssembly="scooter.priceWithAssembly"
          :src="scooter.src"
          :withAssembly="scooter.withAssembly"
        >
          <span v-if="index < Scooters.length - 1">oder</span>
        </ScooterCard2>
      </div>
      <div
        class="border-b border-dashed border-jasny-ciemny-zielen h-[1] w-full mt-10 mb-6"
      ></div>
      <ScootersComparison />
      <BackBtn to="/">Zurück zur Homepage</BackBtn>
    </template>
  </ShoppingLayout>
</template>
