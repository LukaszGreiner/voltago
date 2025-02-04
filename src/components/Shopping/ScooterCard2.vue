<script setup>
import { useCart } from "../composables/useCart";
import RadioInput from "../utils/RadioInput.vue";
const { cart, updateCart } = useCart();

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
  priceWithoutAssembly: {
    type: Number,
    default: 1599,
  },
  priceWithAssembly: {
    type: Number,
    default: 1665,
  },
  withAssembly: Boolean,
});

const styles =
  "w-[328px] h-[256px] lg:w-[528px] md:h-[314px] lg:h-[511px] pt-4 pb-6 lg:pb-10 px-4 flex flex-col b border rounded-md justify-between bg-tlo-ciemne border-jasny-ciemny-zielen";
</script>

<template>
  <div :class="styles" class="h-[256px] w-[328px]">
    <!-- mb-6 => mb-4 -->
    <div class="flex items-center justify-around mb-4">
      <div class="">
        <p class="text-[16px] leading-[140%]">
          {{ name }}
        </p>
        <p class="text-[24px] leading-[132%] font-[500]">
          {{ model }}
        </p>
      </div>
      <div>
        <img class="h-[96px] w-[96px]" :src="src" :alt="alt" />
      </div>
    </div>
    <div
      class="pb-3 flex flex-col flex-1 order rounded-lg border border-dashed border-jasny-ciemny-zielen justify-center p-4"
    >
      <div class="flex flex-col gap-2">
        <RadioInput
          option="Ohne Montage"
          name="scooterModel"
          :value="priceWithoutAssembly"
          :checked="
            cart.model === model &&
            !cart.withAssembly &&
            cart.withAssembly !== null
          "
          @change="
            updateCart({
              model,
              withAssembly: false,
              basePrice: priceWithoutAssembly,
            })
          "
        />
        <RadioInput
          option="Inklusive Montage"
          name="scooterModel"
          :value="priceWithAssembly"
          :checked="
            cart.model === model &&
            cart.withAssembly &&
            cart.withAssembly !== null
          "
          @change="
            updateCart({
              model,
              withAssembly: true,
              basePrice: priceWithAssembly,
            })
          "
        />
      </div>
    </div>
  </div>
</template>
