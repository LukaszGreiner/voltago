<script setup>
import { ref } from "vue";
import Btn from "./Btn.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    required: true,
  },
});

const accordionOpen = ref(props.isOpen);
</script>

<template>
  <div>
    <div v-show="accordionOpen" class="pb-4">
      <p class="text-[15px] leading-[160%] font-[400]">
        {{ text }}
      </p>
    </div>
    <Btn
      @click="accordionOpen = !accordionOpen"
      class="text-[15px] leading-[140%]"
      btn-type="tertiary"
      :arrowDown="!accordionOpen && 'after'"
      :arrowUp="accordionOpen && 'after'"
      >{{ accordionOpen ? "Zusammenbruch" : "Einzelheiten" }}</Btn
    >
  </div>
</template>
