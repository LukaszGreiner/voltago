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
    type: Boolean,
    default: false,
  },
  arrowDown: {
    type: Boolean,
    default: false,
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

  tertiary: `${btnBase} border-b border-neon-zielony text-[16px] leading-[22.4px] font-[500] px-0`,
});
</script>

<template>
  <button :class="btnTypes[btnType]" :disabled="disabled">
    <div class="flex place-items-center gap-2">
      <ArrowLeft v-if="arrowLeft" />
      <slot />
      <ArrowRight v-if="arrowRight" />
      <ArrowDown v-if="arrowDown" />
      <ArrowUp v-if="arrowUp" />
    </div>
  </button>
</template>
