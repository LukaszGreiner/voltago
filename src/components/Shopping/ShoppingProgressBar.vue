<script setup lang="ts">
import DashedLine from "../decorative/DashedLine.vue";
import ProgressTile from "./ProgressTile.vue";

defineProps({
  currentStep: {
    type: String,
    default: "0",
  },
});
</script>

<template>
  <div class="relative min-h-[81px] w-[328px] flex justify-between">
    <DashedLine class="z-0 absolute top-[17px] left-[35.5px]" />

    <ProgressTile
      :state="
        currentStep > '1'
          ? 'completed'
          : currentStep === '1'
          ? 'active'
          : 'uncompleted'
      "
      number="1"
    />
    <ProgressTile
      :state="
        currentStep > '2'
          ? 'completed'
          : currentStep === '2'
          ? 'active'
          : 'uncompleted'
      "
      number="2"
    />
    <ProgressTile
      :state="
        currentStep > '3'
          ? 'completed'
          : currentStep === '3'
          ? 'active'
          : 'uncompleted'
      "
      number="3"
    />
    <ProgressTile
      :state="
        currentStep > '4'
          ? 'completed'
          : currentStep === '4'
          ? 'active'
          : 'uncompleted'
      "
      number="4"
    />
  </div>
</template>
