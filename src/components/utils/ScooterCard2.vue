<script setup lang="ts">
import RadioInput from "./RadioInput.vue";

defineProps({
  cardType: {
    type: String,
    default: "secondary",
  },
  name: {
    type: String,
    default: "name",
  },
  model: {
    type: String,
    default: "model",
  },
  img: {
    type: String,
    default: "src/assets/img/scooter-small-1.png",
  },
  alt: {
    type: String,
    default: "Scooter",
  },
  quote: {
    type: String,
  },
});

const cardBase =
  "lg:w-[528px] md:h-[314px] lg:h-[511px] pt-4 pb-6 lg:pb-10 px-4 flex flex-col b border rounded-md justify-between";

const cardTypes = {
  primary: `${cardBase} border-neon-zielony bg-neon-zielony-jasny`,
  secondary: `${cardBase} bg-tlo-ciemne border-jasny-ciemny-zielen`,
};
</script>

<template>
  <div :class="cardTypes[cardType]">
    <div
      v-if="quote"
      class="bg-tekst-ciemny-zielony text-tlo-jasne rounded-r-lg -ml-[29px] p-2 pl-[10px] -mt-2 mb-[3px] text-sm leading-[18px] lg:w-[280px]"
    >
      {{ quote }}
    </div>
    <div class="flex items-center justify-around mb-6">
      <div class="">
        <p class="text-[16px] leading-[140%]">
          {{ name }}
        </p>
        <p class="text-[24px] leading-[132%] font-[500]">
          {{ model }}
        </p>
      </div>
      <div>
        <img class="h-[96px] w-[96px]" :src="img" :alt="alt" />
      </div>
    </div>
    <div
      class="flex flex-col flex-1 order rounded-lg border border-dashed border-jasny-ciemny-zielen h-full w-full p-4"
    >
      <div class="flex flex-col gap-2">
        <RadioInput name="Ohne Montage" price="1 599 €" value="1 599" />
        <RadioInput name="Inklusive Montage" price="1 665 €" value="1 665" />
      </div>
    </div>
  </div>
</template>
