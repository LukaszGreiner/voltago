<script setup>
import Btn from "./Btn.vue";
defineProps({
  to: {
    type: String,
    required: true,
  },
  disabled: Boolean,
});
</script>

<template>
  <div>
    <router-link :to="to">
      <btn class="!px-4 py-2 w-full" arrowRight="after" :disabled="disabled">
        <slot>Weiter</slot>
      </btn>
    </router-link>
  </div>
</template>
