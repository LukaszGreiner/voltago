<script setup>
import { useCart } from "../composables/useCart";
import Btn from "../utils/Btn.vue";
import GoShoppingBtn from "../utils/GoShoppingBtn.vue";
import ScooterCard from "./ScooterCard.vue";
const { updateCart } = useCart();
import Scooters from "@/data/scooters";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center md:flex-row gap-10 md:gap-4"
  >
    <ScooterCard
      v-for="el in Scooters"
      :key="el.model"
      :name="el.name"
      :model="el.model"
      :src="el.src"
      :alt="el.alt"
      :quote="el.quote"
    >
      <GoShoppingBtn
        @click="
          updateCart({
            model: el.model,
            modelImg: el.src,
            basePrice: el.basePrice,
          })
        "
      />
      <Btn btn-type="secondary">Download der Spezifikation </Btn>
    </ScooterCard>
  </div>
</template>
