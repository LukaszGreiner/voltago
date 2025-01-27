<script setup>
import tick from "../icons/tick.vue";

defineProps({
  state: {
    type: String,
    default: "uncompleted",
  },
  name: {
    String,
  },
  number: {
    type: String,
    default: "0",
  },
});

const base =
  "z-0 items-center flex h-8 w-8 justify-center rounded-full text-[16px] leading-[24px] font-[700]";

const styles = {
  active: `${base} + bg-neon-zielony-jasny border border-neon-zielony text-neon-zielony shadow-[0_0_24px_rgba(0,229,0,0.24)] shadow-neon-zielony`,
  completed: `${base} bg-neon-zielony-jasny-2`,
  uncompleted: `${base} border border-jasny-ciemny-zielen bg-tlo-ciemne text-jasny-ciemny-zielen flex justify-center items-center p-0 m-0`,
};
</script>

<template>
  <!-- Progress Tile -->
  <div>
    <div class="w-[70px] flex flex-col items-center">
      <!-- Icon -->
      <div :class="styles[state]">
        <tick v-if="state === 'completed'" />
        <span v-else>{{ number }}</span>
      </div>
      <!-- Text -->
      <span class="text-[11px] leading-[15.4px] font-[400] text-center mt-1">{{
        name
      }}</span>
    </div>
  </div>
</template>
