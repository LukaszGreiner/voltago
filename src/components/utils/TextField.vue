<script setup>
defineProps({
  label: String,
  disabled: Boolean,
});

const modelValue = defineModel();
</script>

<template>
  <div>
    <label
      class="text-ciemny-zielony text-[14px] font-[400] leading-[22.4px] mt-3"
      for="name"
      >{{ label }}</label
    >
    <input
      id="name"
      class="text-[15px] leading-[21px] font-[500] mb-3 bg-tlo-ciemne"
      type="text"
      v-model="modelValue"
      :disabled="disabled"
    />
  </div>
</template>
