<script setup>
defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>

<div v-if="isOpen" class="absolute inset-0 z-10 h-full max-h-[478px] w-full bg-neon-zielony-jasny-2">
    <nav class="grid w-100 px-4 pt-4">
      <button @click="$emit('closeMenu')" class="flex ml-auto ">
        <img src="../assets/img/butger-btn-close.svg" alt="close menu button">
      </button>
      <ul class="text-base grid ">
        <span class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]"> </span>
        <li class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]">
          <a href="#">Wer wir sind</a>
          </li>
        <li class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]">
          <a href="#">Modelle</a></li>
        <li class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]">
          <a href="#">Führerschein</a>
        </li>
        <li class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]">
          <a href="#">Optionen</a>
        </li>
        <li class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]">
          <a href="#">Kontakt</a>
        </li>
      </ul>
    </nav>
  </div>
</template>