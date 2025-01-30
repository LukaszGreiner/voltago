<script setup>
import NextPageBtn from "../utils/NextPageBtn.vue";

defineProps({
  totalPrice: {
    type: Number,
    default: 0,
  },
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
    <p class="font-bold text-[12px] leading-[16.8px]">
      Zu zahlender Betrag:
      <span class="text-[15px] leading-[21px]">{{ totalPrice }} €</span>
    </p>
    <NextPageBtn :to="nextPage" />
  </footer>
</template>
