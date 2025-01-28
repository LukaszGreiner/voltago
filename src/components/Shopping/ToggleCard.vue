<script setup>
import { ref } from "vue";
import DashedLine2 from "../decorative/DashedLine2.vue";
import ToggleSwitch from "../utils/ToggleSwitch.vue";
import Accordion from "../utils/Accordion.vue";
import RadioInput from "../utils/RadioInput.vue";

const props = defineProps({
  name: {
    type: String,
    default: "Title",
    required: true,
  },
  minPrice: {
    type: [String, Boolean],
    default: "minPrice",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  priceWithoutAssembly: {
    type: String,
    default: "???",
  },
  priceWithAssembly: {
    type: String,
    default: "???",
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

const optionsOpen = ref(props.checked);
const isCheckedOption1 = ref(props.optionSelected === "1");
const isCheckedOption2 = ref(props.optionSelected === "2");

const toggleOptions = () => {
  optionsOpen.value = !optionsOpen.value;

  // Select first option if none of them were selected
  if (!isCheckedOption1.value && !isCheckedOption2.value)
    isCheckedOption1.value = true;
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
        :price="priceWithoutAssembly"
        :checked="isCheckedOption1"
        :name="name"
      />
      <RadioInput
        option="Inklusive Montage"
        :price="priceWithAssembly"
        :checked="isCheckedOption2"
        :name="name"
      />
    </div>
    <Accordion
      v-if="accordionText"
      :text="accordionText"
      :isOpen="accordionOpen"
    />
  </div>
</template>
