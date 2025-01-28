<script setup>
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingProgressSection from "./ShoppingProgressSection.vue";
defineProps({
  currentStep: [String, Number],
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <ShoppingHeader :currentStep="currentStep" />
    <main class="flex flex-col flex-1 pb-16 mb-16 items-center">
      <slot name="main"></slot>
    </main>
    <slot name="footer"></slot>
  </div>
</template>
