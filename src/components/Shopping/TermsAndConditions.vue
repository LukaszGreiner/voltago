<script setup lang="ts">
import Checkbox from "../utils/Checkbox.vue";
</script>

<template>
  <div class="flex flex-col items-start gap-4">
    <!-- <input type="checkbox" required /> -->
    <div class="flex">
      <Checkbox :isRequired="true" />
      <span class="ml-[10px] text-[14px] leading-[19.6px] font-[400]">
        Hiermit bestätige ich, dass ich die Daten korrekt eingetragen habe sowie
        die Datenschutzerklärung und die Cookies Richtlinien durchgelesen und
        akzeptiert habe*
      </span>
    </div>
    <div class="flex">
      <Checkbox :isRequired="true" />
      <span class="ml-[10px] text-[14px] leading-[19.6px] font-[400]">
        Hiermit bestätige ich, dass ich die Daten korrekt eingetragen habe sowie
        die Datenschutzerklärung und die Cookies Richtlinien durchgelesen und
        akzeptiert habe*
      </span>
    </div>
  </div>
</template>
