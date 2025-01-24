<script setup>
import ShoppingFooter from "@/components/Shopping/ShoppingFooter.vue";
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
</script>

<template>
  <ShoppingLayout>
    <template #header>
      <ShoppingHeader currentStep="4" />
    </template>

    <template #main> </template>

    <template #footer>
      <ShoppingFooter :total-price="0" />
    </template>
  </ShoppingLayout>
</template>
