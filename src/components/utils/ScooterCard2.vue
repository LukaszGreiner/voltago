<script setup lang="ts">
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
  image: {
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
  "lg:w-[528px] md:h-[314px] lg:h-[511px] pt-4 pb-6 lg:pb-10 px-7 flex flex-col b border rounded-md justify-between";

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
    <div class="flex mb-6">
      <div
        class="flex flex-1 flex-col justify-center lg:justify-end lg:pb-6 w-full"
      >
        <p class="text-lg leading-[26px] mb-2">
          {{ name }}
        </p>
        <p class="text-2xl font-bold lg:text-[32px] lg:leading-[44px]">
          {{ model }}
        </p>
      </div>
      <div class="flex flex-1">
        <img
          class="min-h-[120px] min-w-[120px] lg:h-[240px] lg:w-[250px]"
          :src="image"
          :alt="alt"
        />
      </div>
    </div>
    <div
      class="flex flex-col flex-1 order rounded-lg border border-dashed border-jasny-ciemny-zielen h-full w-full p-4"
    >
      <div class="flex flex-col gap-2">
        <div class="flex">
          <input type="radio" class="h-6 w-6 accent-neon-zielony\" checked />
          <label for="" class="flex-1 ml-3 text-base">Ohne Montage</label>
          <span class="font-bold text-2xl">1 599€</span>
        </div>

        <div class="flex">
          <input type="radio" class="h-6 w-6" />
          <label for="" class="flex-1 ml-3 text-base">Ohne Montage</label>
          <span class="font-bold text-2xl">1 599€</span>
        </div>
      </div>
    </div>
  </div>
</template>
