<script setup>
import { computed, ref, watch } from "vue";
import { useOrder } from "../composables/useOrder";
import Checkbox from "../utils/Checkbox.vue";
const { order } = useOrder();
const termsAndConditions = ref([
  {
    text: "Hiermit bestätige ich, dass ich die Daten korrekt eingetragen habe sowie die Datenschutzerklärung und die Cookies Richtlinien durchgelesen und akzeptiert habe**",
    isRequired: true,
    accepted: false,
  },
  {
    text: "Hiermit bestätige ich, dass ich die Daten korrekt eingetragen habe sowie die Datenschutzerklärung und die Cookies Richtlinien durchgelesen und akzeptierts habe*",
    isRequired: true,
    accepted: false,
  },
]);

const allTermsAccepted = computed(() => {
  return termsAndConditions.value.every(
    (term) => !term.isRequired || term.accepted
  );
});

// sync order object inside useOrder with termsAndCondition component
watch(allTermsAccepted, (newValue) => {
  order.termsAndConditionsAccepted = newValue;
});
</script>

<template>
  <ul class="flex flex-col gap-4">
    <li
      v-for="el in termsAndConditions"
      :key="el.text"
      class="flex items-start"
    >
      <Checkbox
        :isRequired="el.isRequired"
        :checked="el.accepted"
        @change="el.accepted = !el.accepted"
      />
      <span class="ml-[10px] text-[14px] leading-[19.6px] font-[400]">
        {{ el.text }}
      </span>
    </li>
  </ul>
</template>
