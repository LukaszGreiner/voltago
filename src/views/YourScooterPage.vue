<script setup>
import ScootersComparison from "@/components/Models/ScootersComparison.vue";
import ShoppingFooter from "@/components/Shopping/ShoppingFooter.vue";
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import BackBtn from "@/components/utils/BackBtn.vue";
import ScooterCard2 from "@/components/Shopping/ScooterCard2.vue";
</script>

<template>
  <ShoppingLayout currentStep="1">
    <template #main>
      <div>
        <h2 class="mb-4 text-[18px] leading-[140%]">
          Wählen Sie den Elektroroller für Sie:
        </h2>

        <div class="flex flex-col lg:flex-row items-center gap-4">
          <ScooterCard2
            name="Elektro-Roller"
            model="ZX-500"
            src="src/assets/img/scooter-small-1.png"
          />
          <span>oder</span>
          <ScooterCard2
            name="Elektro-Roller"
            model="DJO3-V55"
            src="src/assets/img/scooter-small-2.png"
          />
        </div>
        <div
          class="border-b border-dashed border-jasny-ciemny-zielen h-1 w-auto mt-10"
        ></div>
        <ScootersComparison />
        <BackBtn />
      </div>
    </template>

    <template #footer>
      <ShoppingFooter :total-price="0" />
    </template>
  </ShoppingLayout>
</template>
