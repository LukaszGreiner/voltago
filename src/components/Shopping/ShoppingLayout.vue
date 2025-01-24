<script setup>
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingProgressSection from "./ShoppingProgressSection.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- <ShoppingHeader currentStep="4" /> -->
    <slot name="header"></slot>
    <main class="flex flex-col flex-1 pb-16 mb-16">
      <slot name="main"></slot>
    </main>
    <slot name="footer"></slot>
  </div>
</template>
