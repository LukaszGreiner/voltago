<script setup>
import Btn from "./Btn.vue";
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <router-link :to="to">
    <btn arrowRight="after"> Weiter </btn>
  </router-link>
</template>
