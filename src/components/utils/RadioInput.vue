<script setup>
const props = defineProps({
  option: {
    type: String,
    default: "option",
  },
  value: {
    type: Number,
  },
  name: {
    type: String,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <!-- Custom input  -->
  <label class="flex items-center space-x-3">
    <!-- outer circle -->
    <div
      class="bg-tlo-jasne z-1 flex h-6 w-6 items-center justify-center rounded-full border border-ciemny-zielony"
    >
      <input
        type="radio"
        :name="name"
        :value="value"
        class="peer hidden"
        :checked="checked"
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
    <span v-if="value" class="text-[23px] leading-[132%] font-[500]">
      {{ value }} <span class="text-[15px]">€</span>
    </span>
  </label>
</template>
