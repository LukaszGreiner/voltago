<script setup>
import { ref } from "vue";
import FormField from "@/components/utils/FormField.vue";
defineProps({
  required: Boolean,
});

const countryCodes = ref([
  { code: "+49", name: "Germany" },
  { code: "+1", name: "USA" },
  { code: "+48", name: "PL" },
  { code: "+44", name: "UK" },
  { code: "+91", name: "India" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+33", name: "France" },
  { code: "+86", name: "China" },
  { code: "+55", name: "Brazil" },
  { code: "+7", name: "Russia" },
]);

const model = defineModel();
</script>

<template>
  <div class="relative w-auto bg-tlo-jasne flex gap-2">
    <label
      class="absolute -top-2 left-2 bg-inherit px-1 text-[12px] leading-[16.8px] font-[400] text-tekst-ciemny-zielony"
    >
      Vorsilbe
    </label>
    <!-- Country Code Dropdown -->
    <select
      :required="required"
      v-model="model"
      class="w-[128px] h-[46px] rounded-[4px] border border-jasny-ciemny-zielen focus:border-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none bg-inherit text-ciemny-zielony pl-3 py-3 text-[16px] leading-[22.4px]"
    >
      <option
        v-for="country in countryCodes"
        :key="country.code"
        :value="country.code"
      >
        {{ country.code }}
      </option>
    </select>

    <slot />
  </div>
</template>
