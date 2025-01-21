<script setup lang="ts">
import burgerBtnClose from "./icons/burger-btn-close.vue";
const navItems = [
  { label: "Wer wir sind", href: "#about" },
  { label: "Modelle", href: "#models" },
  { label: "Führerschein", href: "#drivinglicence" },
  { label: "Optionen", href: "#options" },
  { label: "Kontakt", href: "#contact" },
];
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[99] h-screen md:max-h-[478px] w-full bg-neon-zielony-jasny-2 overflow-y-auto"
    >
      <nav class="grid w-100 px-4 pt-4 md:px-12">
        <button @click="$emit('closeMenu')" class="flex ml-auto">
          <burger-btn-close />
        </button>
        <menu class="text-base grid">
          <span
            class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]"
          ></span>
          <li
            v-for="item in navItems"
            :key="item.label"
            class="border-dashed border-b-[1px] border-jasny-ciemny-zielen py-[21px]"
          >
            <a :href="item.href" @click="$emit('closeMenu')">
              {{ item.label }}
            </a>
          </li>
        </menu>
      </nav>
    </div>
  </Teleport>
</template>
