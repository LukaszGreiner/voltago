<script setup lang="ts">
import ScootersComparison from "@/components/Models/ScootersComparison.vue";
import ShoppingFooter from "@/components/Shopping/ShoppingFooter.vue";
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import Button from "@/components/utils/Button.vue";
import ScooterCard2 from "@/components/utils/ScooterCard2.vue";
</script>

<template>
  <ShoppingLayout>
    <template #header>
      <ShoppingHeader currentStep="1" />
    </template>

    <template #main>
      <div>
        <h2 class="mb-4 text-[18px] leading-[140%]">
          Wählen Sie den Elektroroller für Sie:
        </h2>

        <div class="flex flex-col lg:flex-row items-center gap-4">
          <ScooterCard2
            name="Elektro-Roller"
            model="ZX-500"
            img="src/assets/img/scooter-small-1.png"
          />
          <span>oder</span>
          <ScooterCard2
            name="Elektro-Roller"
            model="DJO3-V55"
            img="src/assets/img/scooter-small-2.png"
          />
        </div>
        <div
          class="border-b border-dashed border-jasny-ciemny-zielen h-1 w-auto mt-10"
        ></div>
        <ScootersComparison />
        <Button
          class="mt-12 mb-16 mr-auto px-0 text-[16px]"
          btnType="tertiary"
          :arrow-left="true"
          >Zurück zur Homepage</Button
        >
      </div>
    </template>

    <template #footer>
      <ShoppingFooter :total-price="0" />
    </template>
  </ShoppingLayout>
</template>
