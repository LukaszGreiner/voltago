<script setup>
import Btn from "./Btn.vue";
</script>

<template>
  <btn
    class="mt-12 mb-16 mr-auto px-0 text-[16px]"
    btnType="tertiary"
    arrow-left="before"
  >
    <a @click="$router.go(-1)">
      <slot>Zurück</slot>
    </a>
  </btn>
</template>
