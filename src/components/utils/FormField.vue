<script setup>
defineProps({
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
  required: Boolean,
});
</script>

<template>
  <div class="relative w-full bg-tlo-jasne">
    <label
      class="absolute -top-2 left-2 bg-inherit px-1 text-[12px] leading-[16.8px] font-[400] text-tekst-ciemny-zielony"
    >
      {{ label }}
    </label>
    <input
      :placeholder="placeholder"
      :type="type"
      value=""
      :required="required"
      class="w-full rounded-[4px] border border-jasny-ciemny-zielen focus:border-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none bg-inherit text-ciemny-zielony pl-3 py-3 h-[46px]"
    />
  </div>
</template>
