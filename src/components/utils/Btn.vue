<script setup>
import { ref } from "vue";
import ArrowLeft from "../icons/arrow-left.vue";
import ArrowRight from "../icons/arrow-right.vue";
import ArrowDown from "../icons/arrow-down.vue";
import ArrowUp from "../icons/arrow-up.vue";

defineProps({
  btnType: {
    type: String,
    default: "primary",
  },
  arrowRight: {
    type: String,
  },
  arrowLeft: {
    type: String,
  },
  arrowUp: {
    type: [String, Boolean],
  },
  arrowDown: {
    type: [String, Boolean],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const btnBase = "py-2 px-6 text-base font-bold flex justify-center text-nowrap";

const btnTypes = ref({
  // green
  primary: `${btnBase} rounded-[59px] bg-ciemny-zielony text-tlo-jasne disabled:bg-jasny-ciemny-zielen`,
  // transparent with outline
  secondary: `${btnBase} rounded-[59px] bg-transparent text-ciemny-zielony border-ciemny-zielony border-[1px] rounded-[59px]`,

  tertiary: `font-[500] border-b border-neon-zielony pb-1 h-[25px] disabled:text-jasny-ciemny-zielen disabled:border-jasny-ciemny-zielen`,
});
</script>

<template>
  <button class="" :class="btnTypes[btnType]" :disabled="disabled">
    <span class="flex place-items-center gap-2">
      <ArrowLeft v-if="arrowLeft === 'before'" />
      <ArrowRight v-if="arrowRight === 'before'" />
      <ArrowUp v-if="arrowUp === 'before'" />
      <ArrowDown v-if="arrowDown === 'before'" />
      <slot />
      <ArrowLeft v-if="arrowLeft === 'after'" />
      <ArrowRight v-if="arrowRight === 'after'" />
      <ArrowUp v-if="arrowUp === 'after'" />
      <ArrowDown v-if="arrowDown === 'after'" />
    </span>
  </button>
</template>
