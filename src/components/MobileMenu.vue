<script setup lang="ts">
import BurgerBtnClose from "./icons/burger-btn-close.vue";
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-20 h-screen md:max-h-[478px] w-full bg-neon-zielony-jasny-2"
    >
      <nav class="grid w-100 px-4 pt-4 md:px-12">
        <button @click="$emit('closeMenu')" class="flex ml-auto">
          <BurgerBtnClose />
        </button>
        <menu class="text-base grid">
          <span
            class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]"
          >
          </span>
          <li
            class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]"
          >
            <a href="#">Wer wir sind</a>
          </li>
          <li
            class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]"
          >
            <a href="#">Modelle</a>
          </li>
          <li
            class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]"
          >
            <a href="#">Führerschein</a>
          </li>
          <li
            class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]"
          >
            <a href="#">Optionen</a>
          </li>
          <li
            class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]"
          >
            <a href="#">Kontakt</a>
          </li>
        </menu>
      </nav>
    </div>
  </Teleport>
</template>
