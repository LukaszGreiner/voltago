<script setup>
import Btn from "./Btn.vue";
defineProps({
  to: {
    type: String,
    required: true,
  },
  disabled: Boolean,
});
</script>

<template>
  <router-link :to="to">
    <btn arrowRight="after" :disabled="disabled"> Weiter </btn>
  </router-link>
</template>
