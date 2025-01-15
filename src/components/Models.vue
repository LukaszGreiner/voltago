<script setup>
import ScooterCard from "./ScooterCard.vue";
</script>

<template>
  <section>
    <div>
      <h2>Du möchtest unabhängig sein und diesen Elektro-Roller besitzen?</h2>
      <p>Ab € 1790,- inkl. Mwst. gehört er nur dir!</p>
    </div>
    <div
      class="flex flex-col items-center justify-center md:flex-row gap-10 md:gap-4 bg-red-200"
    >
      <ScooterCard
        name="Elektro-Roller"
        model="ZX-500"
        image="src/assets/img/scooter-small-1.png"
        alt="ZX-500 electric scooter"
      />
      <ScooterCard
        name="Elektro-Roller"
        model="DJ03-V55"
        image="src/assets/img/scooter-small-2.png"
        alt="DJ03-V55 electric scooter"
        quote="BVB und Arminia Fans schätzen ihn sehr!"
      />
    </div>
  </section>
</template>
