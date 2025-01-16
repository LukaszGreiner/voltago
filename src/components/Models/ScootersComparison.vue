<template>
  <div class="overflow-x-auto">
    <table class="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2 bg-green-100">ZX-500</th>
          <th class="border border-gray-300 px-4 py-2 bg-green-100">
            DJ03-V55
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            colspan="2"
            class="border border-gray-300 px-4 py-2 font-medium bg-green-50"
          >
            Führerschein
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">
            L1E-B für Führerschein Klasse AM und höher zugelassen für 2 Personen
          </td>
          <td class="border border-gray-300 px-4 py-2">
            L3E-A1 für Führerschein Klasse A1 ab 15.5 Jahren zugelassen für 2
            Personen
          </td>
        </tr>
        <tr>
          <td
            colspan="2"
            class="border border-gray-300 px-4 py-2 font-medium bg-green-50"
          >
            Geschwindigkeit
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">
            45km/h in 3 Vorwahlstufen
          </td>
          <td class="border border-gray-300 px-4 py-2">
            60km/h in 3 Vorwahlstufen
          </td>
        </tr>
        <tr>
          <td
            colspan="2"
            class="border border-gray-300 px-4 py-2 font-medium bg-green-50"
          >
            Rückwärtsgang
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2 text-center">❌</td>
          <td class="border border-gray-300 px-4 py-2 text-center">❌</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Product data
const products = ref([
  {
    name: "ZX-500",
    features: {
      license:
        "L1E-B für Führerschein Klasse AM und höher zugelassen für 2 Personen",
      speed: "45km/h in 3 Vorwahlstufen",
      reverse: false,
    },
  },
  {
    name: "DJ03-V55",
    features: {
      license:
        "L3E-A1 für Führerschein Klasse A1 ab 15.5 Jahren zugelassen für 2 Personen",
      speed: "60km/h in 3 Vorwahlstufen",
      reverse: false,
    },
  },
]);
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
