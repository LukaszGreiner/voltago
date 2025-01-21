<script setup lang="ts">
import Button from "../utils/Button.vue";
</script>

<template>
  <footer
    class="h-16 bg-tlo-jasne flex items-center justify-between px-4 w-full shadow-[0px_-4px_16px_0px_#00000014]"
  >
    <p class="font-bold text-[12px] leading-[16.8px]">
      Zu zahlender Betrag:
      <span class="text-[15px] leading-[21px]">1 599 €</span>
    </p>
    <Button class="h-10 w-[108px] my-5" :arrowRight="true">Weiter</Button>
  </footer>
</template>
