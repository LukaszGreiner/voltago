<script setup>
import { defineEmits } from 'vue';
</script>

<template >
<!-- <header class="bg-[url(./assets/img/Voltago-hero__mobile.jpg)] bg-no-repeat w-[360px] h-screen bg-orange-400"> -->
  <header>
    <!-- Logo & Menu Icon -->
<div class="relative flex justify-between lg:justify-start inset-0 z-10 p-4 md:px-12 lg:pl-20 border-2 border-red-500 h-[0px]">
  <div class="h-8 w-[182px] lg:mr-8"> 
    <img src="../assets/img/logo@3x1.svg" alt="voltago logo">
  </div>
  <nav>
    <button @click="$emit('openMenu')" class="h-9 w-15 lg:hidden" type="button">
      <img src="../assets/img/burger-button.svg" alt="menu button">
    </button>
    <!-- DESKTOP -->
    <div class="hidden lg:flex space-x-6 text-base font-['DMSans']">
        <a href="#" class="text-ciemny-zielony hover:underline hover:decoration-dashed">Wer wir sind</a>
        <a href="#" class="text-ciemny-zielony hover:underline hover:decoration-dashed">Modelle</a>
        <a href="#" class="text-ciemny-zielony hover:underline hover:decoration-dashed">Führerschein</a>
        <a href="#" class="text-ciemny-zielony hover:underline hover:decoration-dashed">Optionen</a>
        <a href="#" class="text-ciemny-zielony hover:underline hover:decoration-dashed">Kontakt</a>
      </div>
  </nav>

</div>

</header>
</template>
