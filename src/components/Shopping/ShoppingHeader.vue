<script setup>
import Logo from "../decorative/Logo.vue";
import ShoppingWizard from "./ShoppingWizard.vue";

defineProps({
  currentStep: String,
});
</script>

<template>
  <header class="p-0 flex flex-col">
    <div class="bg-tlo-ciemne h-[64px] pl-4 md:pl-20 flex items-center mb-4">
      <Logo class="h-[30px] w-[173px] md:w-[182px] md:h-[32px]" />
    </div>
    <ShoppingWizard :currentStep="currentStep" />
  </header>
</template>
