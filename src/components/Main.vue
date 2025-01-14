<script setup lang="ts">
import Button from './Button.vue';

</script>

<template>
<main>

<!-- Hero background image -->
<div class="h-[500px] flex items-center md:justify-start justify-center border-2 border-red-700"> 
  <picture class="absolute inset-0 lg:inset-auto lg:right-0 lg:top-0 w-full lg:h-1/2 lg:w-1/2 object-cover">
    <source media="(min-width: 1024px)" srcset="../assets/img/Voltago-hero__desktop.png">
    <source media="(min-width: 720px)" srcset="../assets/img/Voltago-hero__tablet.jpg">
    <img src="../assets/img/Voltago-hero__mobile.jpg" alt="Hero Image" >
  </picture>

  <!-- Call to action -->
  <div class="relative lg:block max-w-[528px] right-0 md:ml-4 pl-4 ">
  <h1 class="text-[32px] leading-[44px] font-medium mb-4 md:mb-6">Elektromobilität <b>für alle.</b></h1>
  <h2 class="text-2xl font-regular mb-3">Home-Charging macht es möglich!</h2>
  <p class="text[18px] leading[16px] mb-6 md:mb-8">Auch wenn du im 14. Stock wohnst bist du jetzt mobil! Du lädst dein Akku in deiner Wohnung und mußt nicht an eine Ladesäule!</p>

  <Button>Elektroroller kaufen</Button>
</div>

</div>




</main>
</template>