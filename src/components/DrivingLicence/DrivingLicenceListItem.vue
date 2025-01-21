<script setup>
import MarkDone from "../icons/mark-done.vue";
</script>

<template>
  <div class="flex">
    <mark-done class="inline-block min-w-6 min-h-6 mr-4" />
    <slot />
  </div>
</template>
