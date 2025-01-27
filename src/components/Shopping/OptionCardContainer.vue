<script setup>
defineProps({
  title: {
    type: String,
    default: "Title",
  },
});
</script>
<template>
  <div class="w-[328px]">
    <h2 class="mb-4 text-[18px] leading-[25.2px] tracking-[-3%]">
      {{ title }}
    </h2>
    <div
      class="flex flex-col rounded-xl border border-jasny-ciemny-zielen bg-tlo-jasne divide-y divide-jasny-ciemny-zielen"
    >
      <slot />
    </div>
  </div>
</template>
