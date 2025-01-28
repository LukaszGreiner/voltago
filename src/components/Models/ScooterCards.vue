<script setup>
import ScooterCard from "./ScooterCard.vue";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center md:flex-row gap-10 md:gap-4"
  >
    <ScooterCard
      name="Elektro-Roller"
      model="ZX-500"
      src="src/assets/img/scooter-small-1.png"
      alt="ZX-500 electric scooter"
    />
    <ScooterCard
      name="Elektro-Roller"
      model="DJ03-V55"
      src="src/assets/img/scooter-small-2.png"
      alt="DJ03-V55 electric scooter"
      quote="BVB und Arminia Fans schätzen ihn sehr!"
    />
  </div>
</template>
