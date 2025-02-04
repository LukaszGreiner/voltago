<script setup>
import { inject } from "vue";
import { useCart } from "../composables/useCart";
import NextPageBtn from "../utils/NextPageBtn.vue";
const { cart, totalPrice } = useCart();

defineProps({
  nextPage: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <footer
    class="h-16 bg-tlo-jasne flex items-center justify-between px-4 w-full shadow-[0px_-4px_16px_0px_#00000014] fixed bottom-0"
  >
    <p class="flex items-center gap-1">
      <span class="font-[700] text-[12px] leading-[16.8px]">
        Zu zahlender Betrag:
      </span>
      <span class="text-[15px] leading-[21px] font-[700]"
        >{{ totalPrice }} €</span
      >
    </p>
    <NextPageBtn :to="nextPage" :disabled="!cart.model" />
  </footer>
</template>
