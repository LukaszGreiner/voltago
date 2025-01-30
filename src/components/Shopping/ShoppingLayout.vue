<script setup>
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingFooter from "./ShoppingFooter.vue";
defineProps({
  currentStep: {
    type: [String, Number],
    required: true,
  },
  totalPrice: {
    type: [String, Number],
    required: true,
  },
  nextPage: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <ShoppingHeader :currentStep="currentStep" />
    <main class="flex flex-col flex-1 pb-16 mb-16 items-center">
      <slot name="main"></slot>
    </main>
    <!-- <slot name="footer"></slot> -->
    <ShoppingFooter :totalPrice="totalPrice" :nextPage="nextPage" />
  </div>
</template>
