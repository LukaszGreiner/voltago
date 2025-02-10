<script setup>
import { computed } from "vue";
import { useCart } from "../composables/useCart";
import RadioInput from "../utils/RadioInput.vue";
import NextPageBtn from "../utils/NextPageBtn.vue";
const { cart, updateCart } = useCart();

const props = defineProps({
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

const IsSelected = computed(() => {
  return cart.model === props.model;
});

const styles =
  " h-[256px] w-[328px] md:h-[314px] lg:h-[352px] lg:w-[416px] pt-4 pb-6 px-4 flex flex-col b border rounded-md  bg-tlo-ciemne border-jasny-ciemny-zielen";
</script>

<template>
  <div :class="[styles, IsSelected ? 'bg-tlo-ciemne' : 'bg-tlo-jasne']">
    <div class="flex items-center justify-around mb-4 h-[96px] lg:h-[120px]">
      <div class="">
        <p class="text-[16px] leading-[22.4px]">
          {{ name }}
        </p>
        <p class="text-[24px] leading-[31.68px] font-[500]">
          {{ model }}
        </p>
      </div>
      <div>
        <img class="h-[96px] w-[96px]" :src="src" :alt="alt" />
      </div>
    </div>
    <div
      class="pb-3 flex flex-col order rounded-lg border border-dashed border-jasny-ciemny-zielen justify-center p-4"
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
              modelImg: src,
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
              modelImg: src,
            })
          "
        />
      </div>
    </div>
    <!-- large screen -->
    <NextPageBtn
      to="accessoriespage"
      v-show="IsSelected"
      class="hidden lg:flex mt-6 w-full"
      arrowRight="after"
      >Auswählen und weiter</NextPageBtn
    >
  </div>
</template>
