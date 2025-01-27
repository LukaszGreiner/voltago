<script setup>
import RadioInput from "../utils/RadioInput.vue";

defineProps({
  option: {
    type: String,
    default: "option",
  },
  icon: {
    type: String,
  },
  lowerText: {
    type: String,
  },
  additionalCost: {
    type: String,
  },
});
</script>

<template>
  <!-- OptionCard -->
  <div class="p-4">
    <RadioInput class="mb-[10px]" name="Art der Zustellung" :option="option">
      <img
        v-if="icon"
        :src="'/src/assets/optionCardIcons/' + icon + '.svg'"
        :alt="icon"
      />
    </RadioInput>

    <p
      v-if="lowerText"
      class="text-15 leading-[24px] text-tekst-ciemny-zielony font-[400]"
    >
      {{ lowerText }}
    </p>
    <div
      v-if="additionalCost"
      class="inline-block rounded-xl bg-tlo-ciemne-2 px-2 py-1 text-center"
    >
      <span class="text-[14px] leading-[19.6px] font-[500]"
        >+ {{ additionalCost }} €</span
      >
    </div>
  </div>
</template>
