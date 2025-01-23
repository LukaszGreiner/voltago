<script setup>
defineProps({
  isChecked: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <label class="relative inline-block h-6 w-10">
    <input
      type="checkbox"
      :checked="isChecked"
      class="peer h-0 w-0 opacity-0"
    />
    <!-- Outer shape -->
    <span
      class="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-full bg-jasny-ciemny-zielen transition-all peer-checked:bg-neon-zielony peer-focus:ring-2 peer-focus:ring-transparent"
    ></span>
    <!-- Inner SHape -->
    <span
      class="absolute bottom-1 left-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-4"
    ></span>
  </label>
</template>
