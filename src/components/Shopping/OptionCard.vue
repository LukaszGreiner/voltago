<script setup>
import RadioInput from "../utils/RadioInput.vue";

defineProps({
  name: String,
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
    type: Number,
  },
  checked: Boolean,
});
</script>

<template>
  <!-- OptionCard -->
  <div
    class="p-4 first-of-type:rounded-t-xl last-of-type:rounded-b-xl"
    :class="checked ? 'bg-tlo-ciemne' : 'bg-tlo-jasne'"
  >
    <RadioInput
      class="mb-[10px]"
      :name="name"
      :option="option"
      :checked="checked"
    >
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
