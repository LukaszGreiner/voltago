<script setup lang="ts">
import DashedLine from "../decorative/DashedLine.vue";
import ProgressTile from "./ProgressTile.vue";
</script>

<template>
  <div class="relative min-h-[81px] w-[328px] flex justify-between">
    <DashedLine class="z-0 absolute top-[17px] left-[35.5px]" />

    <ProgressTile state="active" number="1">Ihr Elektroroller</ProgressTile>
    <ProgressTile state="uncompleted" number="2"
      >Zubehör für Elektroroller</ProgressTile
    >
    <ProgressTile state="uncompleted" number="3"
      >Daten, Lieferung und Zahlung</ProgressTile
    >
    <ProgressTile state="uncompleted" number="4">Übersicht</ProgressTile>
  </div>
</template>
