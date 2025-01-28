<script setup>
import BurgerBtnIcon from "../icons/burger-btn-icon.vue";
import BurgerBtnCloseIcon from "../icons/burger-btn-close-icon.vue";
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button type="button">
    <burger-btn-close-icon v-if="isOpen" />
    <burger-btn-icon v-else />
  </button>
</template>
