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
    type: Boolean,
    default: false,
  },
  arrowLeft: {
    type: Boolean,
    default: false,
  },
  arrowUp: {
    type: [String, Boolean],
    default: "none", // options: "before", "after", "none"
  },
  arrowDown: {
    type: [String, Boolean],
    default: "none", // options: "before", "after", "none"
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const btnBase = "py-2 px-6 text-base font-bold flex justify-center";

const btnTypes = ref({
  // green
  primary: `${btnBase} rounded-[59px] bg-ciemny-zielony text-tlo-jasne disabled:bg-jasny-ciemny-zielen`,
  // transparent with outline
  secondary: `${btnBase} rounded-[59px] bg-tlo-jasne text-ciemny-zielony border-ciemny-zielony border-[1px] rounded-[59px]`,

  tertiary: `font-[500] border-b border-neon-zielony pb-1 h-[25px]`,
});
</script>

<template>
  <button class="" :class="btnTypes[btnType]" :disabled="disabled">
    <span class="flex place-items-center gap-2">
      <ArrowLeft v-if="arrowLeft" />
      <ArrowUp v-if="arrowUp === 'before'" />
      <ArrowDown v-if="arrowDown === 'before'" />
      <slot />
      <ArrowDown v-if="arrowDown === 'after' || arrowDown === true" />
      <ArrowUp v-if="arrowUp === 'after' || arrowUp === true" />
      <ArrowRight v-if="arrowRight" />
    </span>
  </button>
</template>
