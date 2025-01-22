<script setup lang="ts">
import DashedLine2 from "../decorative/DashedLine2.vue";
import Button from "../utils/Button.vue";
import ToggleSwitch from "../utils/ToggleSwitch.vue";
</script>

<template>
  <div
    class="h-[142px] w-[328px] p-4 border rounded-lg border-jasny-ciemny-zielen"
  >
    <div class="flex justify-center items-center">
      <div class="flex-1">
        <h3 class="text-[16px] leading-[140%] font-[500] mb-1">
          BE – Batterie-Erweiterung
        </h3>
        <p
          class="font-[400] text-[15px] leading-[160%] text-tekst-ciemny-zielony"
        >
          ab 699 €
        </p>
      </div>
      <div class="ml-6">
        <ToggleSwitch />
      </div>
    </div>
    <DashedLine2 class="my-4 mx-auto" />
    <div>
      <Button class="text-[15px]" btn-type="tertiary" arrowDown="after"
        >Einzelheiten</Button
      >
    </div>
  </div>
</template>
