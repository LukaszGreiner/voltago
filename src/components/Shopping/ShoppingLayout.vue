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

    <!-- mb-[64px] height of the footer on mobile -->
    <main class="mb-[64px] lg:mb-0 pb-16 lg:pb-0 flex flex-col items-center">
      <div
        class="hidden lg:block h-1 border-jasny-ciemny-zielen border-t-[1px] mb-10"
      ></div>
      <slot name="main"></slot>
    </main>
    <slot name="footer">
      <ShoppingFooter :nextPage="nextPage" class="lg:hidden" />
    </slot>
  </div>
</template>
