<script setup>
import { inject, ref } from "vue";
import DashedLine2 from "../decorative/DashedLine2.vue";
import ToggleSwitch from "../utils/ToggleSwitch.vue";
import Accordion from "../utils/Accordion.vue";
import RadioInput from "../utils/RadioInput.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  minPrice: {
    type: Number,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  priceWithoutAssembly: {
    type: Number,
    required: true,
  },
  priceWithAssembly: {
    type: Number,
    required: true,
  },
  accordionText: {
    type: String,
  },
  accordionOpen: {
    type: Boolean,
    default: false,
  },
  optionSelected: {
    type: String,
  },
});

const updateFeatures = inject("updateFeatures");
const removeFeature = inject("removeFeature");

const optionsOpen = ref(props.checked);
const isCheckedOption1 = ref(props.optionSelected === "1");
const isCheckedOption2 = ref(props.optionSelected === "2");

const toggleOptions = () => {
  optionsOpen.value = !optionsOpen.value;

  // If none of the options are checked, after opening check first option
  if (optionsOpen && !isCheckedOption1.value && !isCheckedOption1.value)
    isCheckedOption1.value = true;

  // Add feature to the card when options are switched on
  if (optionsOpen.value && isCheckedOption1.value)
    updateFeatures({
      name: props.name,
      price: props.priceWithoutAssembly,
      withAssembly: false,
    });
  else if (optionsOpen.value && isCheckedOption2.value)
    updateFeatures({
      name: props.name,
      price: props.priceWithAssembly,
      withAssembly: true,
    });

  // Remove feature from the card when options are switched off and reset checked options
  if (!optionsOpen.value) {
    removeFeature(props.name);
    isCheckedOption1.value = false;
    isCheckedOption2.value = false;
  }
};
</script>

<template>
  <div
    class="bg-tlo-ciemne h-[auto] w-[328px] p-4 border rounded-lg border-jasny-ciemny-zielen"
  >
    <div class="flex justify-center items-center">
      <div class="flex-1">
        <h3 class="text-[16px] leading-[140%] font-[500] mb-1">
          {{ name }}
        </h3>
        <p
          class="font-[400] text-[15px] leading-[160%] text-tekst-ciemny-zielony"
        >
          {{ "ab " + minPrice + " €" }}
        </p>
      </div>
      <ToggleSwitch
        @click.prevent="toggleOptions()"
        class="ml-6"
        :checked="optionsOpen"
      />
    </div>
    <DashedLine2 v-if="accordionText || optionsOpen" class="my-4 mx-auto" />
    <div class="grid gap-2 mb-4" v-show="optionsOpen">
      <RadioInput
        option="Ohne Montage"
        :value="priceWithoutAssembly"
        :checked="isCheckedOption1"
        :name="name"
        @change="
          updateFeatures({
            name,
            withAssembly: false,
            price: priceWithoutAssembly,
          })
        "
      />
      <RadioInput
        option="Inklusive Montage"
        :value="priceWithAssembly"
        :checked="isCheckedOption2"
        :name="name"
        @change="
          updateFeatures({ name, withAssembly: true, price: priceWithAssembly })
        "
      />
    </div>
    <Accordion
      v-if="accordionText"
      :text="accordionText"
      :isOpen="accordionOpen"
    />
  </div>
</template>
