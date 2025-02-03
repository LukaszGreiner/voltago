<script setup>
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingFooter from "./ShoppingFooter.vue";
import { inject } from "vue";

import { provide } from "vue";
import { useCart } from "@/components/composables/useCart";
import { useForm } from "@/components/composables/useForm";

const { cart, updateModel, updateFeatures, removeFeature } = useCart();
const { formDetails, updateFormDetails } = useForm();

provide("cart", cart);
provide("updateModel", updateModel);
provide("updateFeatures", updateFeatures);
provide("removeFeature", removeFeature);

provide("formDetails", formDetails);
provide("updateFormDetails", updateFormDetails);

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
