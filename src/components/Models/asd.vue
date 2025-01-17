<template>
  <table>
    <thead>
      <tr>
        <th v-for="scooter in scootersTable" :key="scooter.name">
          {{ scooter.name }}
        </th>
      </tr>
    </thead>
    <tbody class="text-center">
      <template v-for="(feature, index) in features" :key="index">
        <tr>
          <td :colspan="scootersTable.length">
            {{ feature.name }}
          </td>
        </tr>
        <tr>
          <td v-for="scooter in scootersTable" :key="scooter.name">
            <template v-if="scooter.features[feature] === true">
              <MarkDone />
            </template>
            <template v-else>
              {{ scooter.features[feature] }}
            </template>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from "vue";
import MarkDone from "../icons/mark-done.vue";

const scootersTable = ref([
  {
    name: "ZX-500",
    features: {
      license:
        "L1E-B für Führerschein Klasse AM und höher zugelassen für 2 Personen",
      speed: "45km/h in 3 Vorwahlstufen",
      reverse: "ads",
      remoteControl: true,
      usbCharging: true,
      luggageCarrier: "placeholder",
      topCase: "placeholder",
      dimensions: "placeholder",
      weight: "placeholder",
      battery: "placeholder",
      range: "placeholder",
      charger: "placeholder",
    },
  },
  {
    name: "DJ03-V55",
    features: {
      license:
        "L3E-A1 für Führerschein Klasse A1 ab 15.5 Jahren zugelassen für 2 Personen",
      speed: "60km/h in 3 Vorwahlstufen",
      reverse: true,
      remoteControl: "placeholder",
      usbCharging: "placeholder",
      luggageCarrier: "placeholder",
      topCase: "placeholder",
      dimensions: "placeholder",
      weight: "placeholder",
      battery: "placeholder",
      range: "placeholder",
      charger: "placeholder",
    },
  },
]);

const features = ref([
  { name: "Führerschein", key: "license" },
  { name: "Geschwindigkeit", key: "speed" },
  { name: "Rückwärtsgang", key: "reverse" },
  { name: "Remote Control – Alarmsystem", key: "remoteControl" },
  {
    name: "USB Anschluss / Handy-Ladung während der Fahrt",
    key: "usbCharging",
  },
  { name: "Gepäckträger", key: "luggageCarrier" },
  { name: "TopCase", key: "topCase" },
  { name: "Abmessungen", key: "dimensions" },
  { name: "Gewicht", key: "weight" },
  { name: "Akku", key: "battery" },
  { name: "Reichweite", key: "range" },
  { name: "Ladegerät", key: "charger" },
]);
</script>
