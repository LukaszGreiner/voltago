<script setup>
import Logo from "../decorative/Logo.vue";
import ShoppingWizard from "./ShoppingWizard.vue";

defineProps({
  currentStep: String,
});
</script>

<template>
  <header class="p-0 grid gap-4">
    <div class="bg-tlo-ciemne p-4">
      <Logo />
    </div>
    <ShoppingWizard :currentStep="currentStep" />
  </header>
</template>
