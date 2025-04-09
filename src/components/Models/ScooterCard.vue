<script setup>
import Btn from "../utils/Btn.vue";
import GoShoppingBtn from "../utils/GoShoppingBtn.vue";
defineProps({
  name: {
    type: String,
    default: "name",
  },
  model: {
    type: String,
    default: "model",
  },
  src: {
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
</script>

<template>
  <!-- ScooterCard -->
  <div
    class="min-h-[314px] lg:w-[528px] md:min-h-[350px] lg:h-[511px] pt-4 pb-6 lg:pb-10 px-7 flex flex-col bg-neon-zielony-jasny border rounded-md border-neon-zielony justify-between"
  >
    <div
      v-if="quote"
      class="bg-tekst-ciemny-zielony text-tlo-jasne rounded-r-lg -ml-[29px] p-2 pl-[10px] -mt-2 mb-[3px] text-sm leading-[18px] lg:w-[280px]"
    >
      {{ quote }}
    </div>
    <div class="flex mb-6">
      <div
        class="flex flex-1 flex-col justify-center lg:justify-end lg:pb-6 px-4 w-full"
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
          :src="src"
          :alt="alt"
        />
      </div>
    </div>
    <div class="flex flex-1 justify-center items-end">
      <div class="flex flex-col gap-4 w-[259px] h-[96px]">
        <slot>
          <GoShoppingBtn />
          <Btn btn-type="secondary">Download der Spezifikation </Btn>
        </slot>
      </div>
    </div>
  </div>
</template>
