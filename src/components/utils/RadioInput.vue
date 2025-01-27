<script setup>
const props = defineProps({
  option: {
    type: String,
    default: "option",
  },
  value: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <!-- Custom input  -->
  <!-- space-x-2 => space-x-3 -->
  <label class="flex items-center space-x-3">
    <!-- outer circle -->
    <div
      class="z-1 flex h-6 w-6 items-center justify-center rounded-full border border-ciemny-zielony"
    >
      <input
        type="radio"
        :name="name"
        :value="value ? value : price"
        class="peer hidden"
        :checked="isChecked"
      />
      <!-- inner circle -->
      <div
        class="z-0 h-3 w-3 transform rounded-full peer-checked:bg-neon-zielony"
      ></div>
    </div>
    <span class="flex-1 ml-3 text-[15px] leading-[140%] font-[500]">{{
      option
    }}</span>
    <slot />
    <span v-if="price" class="text-[23px] leading-[132%] font-[500]">
      {{ price }} <span class="text-[15px]">€</span>
    </span>
  </label>
</template>
