<script setup>
import ModelsHeading from "./Models/ModelsHeading.vue";
import ScooterCards from "./Models/ScooterCards.vue";
import ScootersComparison from "./Models/ScootersComparison.vue";
</script>

<template>
  <section
    id="options"
    class="flex flex-col items-center last:items-center py-12 bg-tlo-ciemne"
  >
    <ModelsHeading />
    <ScooterCards class="mb-12" />
    <ScootersComparison initialHeight="750" />
  </section>
</template>
