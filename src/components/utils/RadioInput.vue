<script setup>
import { stringify } from "postcss";

defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
  name: {
    type: String,
    default: "Name",
  },
  price: {
    type: String,
    default: "? ???€",
  },
});
</script>

<template>
  <!-- Custom input  -->
  <label class="flex items-center space-x-2">
    <!-- outer circle -->
    <div
      class="z-1 flex h-6 w-6 items-center justify-center rounded-full border border-black"
    >
      <input type="radio" name="custom" :value="value" class="peer hidden" />
      <!-- inner circle -->
      <div
        class="z-0 h-3 w-3 transform rounded-full peer-checked:bg-neon-zielony"
      ></div>
    </div>
    <span class="flex-1 ml-3 text-[15px] leading-[140%] font-[500]">{{
      name
    }}</span>
    <span class="text-[23px] leading-[132%] font-[500]">{{ price }}</span>
  </label>
</template>
