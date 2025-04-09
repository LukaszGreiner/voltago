<script setup>
import { ref } from "vue";

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  isRequired: Boolean,
});

const model = defineModel();

// Toggle checkbox state on keydown (Space or Enter)
const handleKeydown = (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    model.value = !model.value;
  }
};
</script>

<template>
  <div>
    <!-- Custom checkbox  -->
    <label>
      <!-- outer square -->
      <div
        :tabindex="0"
        role="checkbox"
        :aria-checked="model"
        @keydown="handleKeydown"
        @click="model = !model"
        class="z-1 flex h-6 w-6 items-center justify-center rounded-[4px] border border-ciemny-zielony"
        :class="model ? 'bg-tlo-ciemne' : 'bg-tlo-jasne'"
      >
        <input
          type="checkbox"
          class="peer hidden"
          :checked="model"
          :required="isRequired"
        />
        <!-- inner square -->
        <div class="z-0 h-3 w-3 transform peer-checked:bg-neon-zielony"></div>
      </div>
    </label>
  </div>
</template>
