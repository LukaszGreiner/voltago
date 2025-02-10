<script setup>
import Btn from "./Btn.vue";
const props = defineProps({
  to: String,
});
</script>

<template>
  <a
    @click="props.to ? $router.push(props.to) : $router.back()"
    class="mr-auto"
  >
    <btn
      class="mt-12 mb-16 px-0 text-[16px]"
      btnType="tertiary"
      arrow-left="before"
    >
      <slot>Zurück</slot>
    </btn>
  </a>
</template>
