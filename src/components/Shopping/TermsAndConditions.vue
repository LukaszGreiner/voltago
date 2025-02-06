<script setup>
import { computed, ref, watch } from "vue";
import { useOrder } from "../composables/useOrder";
import Checkbox from "../utils/Checkbox.vue";
const { order } = useOrder();
</script>

<template>
  <ul class="flex flex-col gap-4">
    <li
      v-for="el in order.termsAndConditions"
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
