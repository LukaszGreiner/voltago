<script setup lang="ts">
import ScooterCard from "@/components/Models/ScooterCard.vue";
import ScootersComparison from "@/components/Models/ScootersComparison.vue";
import ShoppingFooter from "@/components/Shopping/ShoppingFooter.vue";
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingProgressBar from "@/components/Shopping/ShoppingProgressBar.vue";
import Button from "@/components/utils/Button.vue";
import ScooterCard2 from "@/components/utils/ScooterCard2.vue";
</script>

<template>
  <div class="h-screen flex flex-col">
    <ShoppingHeader class="mb-4" />
    <section class="grid place-items-center">
      <h1 class="mb-2 font-[500] text-[28px] leading-10 tracking-[-0.03em]">
        Elektroroller kaufen
      </h1>
      <ShoppingProgressBar class="mb-8" />
    </section>
    <main class="flex-1 items-center flex-col flex mb-16 p-0">
      <section>
        <h2 class="mb-4 text-[28px] leading-10">
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
      </section>
      <Button btnType="tertiary" :arrow-left="true">Zurück zur Homepage</Button>

      <!-- <ScootersComparison /> -->
    </main>
    <ShoppingFooter />
  </div>
</template>
