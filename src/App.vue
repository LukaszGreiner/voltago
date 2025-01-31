<script setup>
import DebugNav from "@/components/utils/DebugNav.vue";
import { provide } from "vue";
import { useCart } from "./components/composables/useCart";

const { cart, updateModel, updateFeatures, removeFeature } = useCart();

provide("cart", cart);
provide("updateModel", updateModel);
provide("updateFeatures", updateFeatures);
provide("removeFeature", removeFeature);
</script>

<template>
  <!-- <DebugNav /> -->
  <RouterView />
</template>
