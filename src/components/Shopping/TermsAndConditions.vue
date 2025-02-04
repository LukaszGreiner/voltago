<script setup>
import Checkbox from "../utils/Checkbox.vue";
const termsAndConditions = [
  {
    text: "Hiermit bestätige ich, dass ich die Daten korrekt eingetragen habe sowie die Datenschutzerklärung und die Cookies Richtlinien durchgelesen und akzeptiert habe**",
    isRequired: true,
  },
  {
    text: "Hiermit bestätige ich, dass ich die Daten korrekt eingetragen habe sowie die Datenschutzerklärung und die Cookies Richtlinien durchgelesen und akzeptierts habe*",
    isRequired: true,
  },
];
</script>

<template>
  <ul class="flex flex-col gap-4">
    <li
      v-for="el in termsAndConditions"
      :key="el.text"
      class="flex items-start"
    >
      <Checkbox :isRequired="el.isRequired" />
      <span class="ml-[10px] text-[14px] leading-[19.6px] font-[400]">
        {{ el.text }}
      </span>
    </li>
  </ul>
</template>
