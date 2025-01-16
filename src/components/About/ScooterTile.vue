<script setup>
import { defineProps, ref } from "vue";
defineProps({
  text1: String,
  text2: String,
  img: String,
  alt: String,
});
</script>

<template>
  <div class="grid place-items-center">
    <img class="mb-6 h-[220px] z-10" :src="img" :alt="alt" />
    <p class="text-lg leading-6 font-bold">{{ text1 }}</p>
    <p class="text-base">{{ text2 }}</p>
  </div>
</template>
