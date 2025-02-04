<script setup>
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingFooter from "./ShoppingFooter.vue";
import { useCart } from "@/components/composables/useCart";
import { useForm } from "@/components/composables/useForm";

const { cart, updateCart, updateFeatures, removeFeature } = useCart();
const { formDetails, updateFormDetails } = useForm();

defineProps({
  currentStep: {
    type: [String, Number],
    required: true,
  },
  nextPage: {
    type: String,
    required: true,
  },
  nextPageDisabled: Boolean,
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <ShoppingHeader :currentStep="currentStep" />
    <main class="flex flex-col flex-1 pb-16 mb-16 items-center">
      <slot name="main"></slot>
    </main>
    <ShoppingFooter :nextPage="nextPage" />
  </div>
</template>
