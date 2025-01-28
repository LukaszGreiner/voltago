<script setup>
defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  isRequired: Boolean,
});
</script>

<template>
  <div>
    <!-- Custom checkbox  -->
    <label>
      <!-- outer square -->
      <div
        class="bg-tlo-jasne z-1 flex h-6 w-6 items-center justify-center rounded-[4px] border border-ciemny-zielony"
      >
        <input
          type="checkbox"
          class="peer hidden"
          :checked="checked"
          :required="isRequired"
        />
        <!-- inner square -->
        <div class="z-0 h-3 w-3 transform peer-checked:bg-neon-zielony"></div>
      </div>
    </label>
  </div>
</template>
