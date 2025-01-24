<script setup lang="ts">
import Logo from "../decorative/Logo.vue";
import ShoppingProgressBar from "./ShoppingProgressBar.vue";

defineProps({
  currentStep: String,
});
</script>

<template>
  <header class="p-0 grid gap-4">
    <div class="bg-tlo-ciemne p-4">
      <Logo />
    </div>
    <ShoppingProgressBar :currentStep="currentStep" />
  </header>
</template>
