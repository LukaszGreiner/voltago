<script setup>
import { ref } from "vue";

const model = defineModel();

const radioRef = ref(null);

const handleKeydown = (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    if (radioRef.value) {
      radioRef.value.click();
    }
  }
};
</script>

<template>
  <label class="relative inline-block h-6 w-10 cursor-pointer">
    <input
      tabindex="-1"
      type="checkbox"
      :checked="model"
      class="peer h-0 w-0 opacity-0"
      ref="radioRef"
    />
    <!-- Outer shape -->
    <div
      tabindex="0"
      role="switch"
      :aria-checked="model"
      @keydown="handleKeydown"
      class="absolute bottom-0 left-0 right-0 top-0 c rounded-full bg-jasny-ciemny-zielen transition-all peer-checked:bg-neon-zielony peer-focus:ring-2 peer-focus:ring-transparent"
    ></div>
    <!-- Inner Shape (Toggle Knob) -->
    <div
      class="absolute bottom-1 left-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-4"
    ></div>
  </label>
</template>
