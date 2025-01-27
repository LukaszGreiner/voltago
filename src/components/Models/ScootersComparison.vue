<script setup>
import { ref } from "vue";
import MarkDone from "../icons/mark-done.vue";
import Button from "../utils/Button.vue";

const props = defineProps({
  initialHeight: {
    type: [Number, String],
    default: 0,
  },
});

const scootersTable = [
  {
    name: "ZX-500",
    features: {
      license:
        "L1E-B für Führerschein Klasse AM und höher zugelassen für 2 Personen",
      speed: "45km/h in 3 Vorwahlstufen",
      reverse: true,
      remoteControl: true,
      usbCharging: true,
      luggageCarrier: "mit Haltegriff",
      topCase: "kann 1 Zusatz-Akku aufnehmen",
      dimensions: "L1680 x B710 x H1050mm",
      weight: "71.3kg inkl. Akku (10.3kg)",
      battery:
        "60V/24Ah Lithium Akku – herausnehmbar für Home-Charging d.h. keine Ladestation nötig!",
      range: "-",
      charger: "3A im Lieferumfang",
    },
  },
  {
    name: "DJ03-V55",
    features: {
      license:
        "L3E-A1 für Führerschein Klasse A1 ab 15.5 Jahren zugelassen für 2 Personen",
      speed: "60km/h in 3 Vorwahlstufen",
      reverse: true,
      remoteControl: true,
      usbCharging: true,
      luggageCarrier: "mit Koffer",
      topCase: "XXL Topcase für 2 Helme + Platz",
      dimensions:
        "(ohne Spiegel) L1880 x B860 x H1180 mm3 (mit Spiegel) L1880 x B920 x H1330 mm3",
      weight: "57kg Akku 13,7kg",
      battery:
        "Basis 60V/30Ah Li-Ionen Akku – entnehmbar für Home-Charging unter der Bank passen 2 Stück für bis zu 130km",
      range: "ca. 65km / Batterie",
      charger: "3A im Lieferumfang",
    },
  },
];

const features = [
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
];

function toggleTable() {
  tableHeight.value =
    tableHeight.value === "h-100" ? initialHeightClass : "h-100";
  btnShowMore.value = !btnShowMore.value;
  btnShowLess.value = !btnShowLess.value;
}

const initialHeightClass = `h-[${props.initialHeight}px]`;
const tableHeight = ref(initialHeightClass);
const btnShowMore = ref(true);
const btnShowLess = ref(false);
</script>

<template>
  <!-- Scooter Comparison -->
  <div class="overflow-hidden mb-12" :class="tableHeight">
    <table>
      <thead>
        <tr class="text-lg leading-[26px] font-bold">
          <!-- Scooter Model  -->

          <th v-for="scooter in scootersTable" :key="scooter.name" class="pb-4">
            <p class="mb-2 text-center text-lg leading-7 font-normal">
              Elektro-Roller
            </p>
            {{ scooter.name }}
          </th>
        </tr>
      </thead>
      <tbody class="text-center text-[15px] leading-[22px]">
        <!-- Scooter feature -->
        <template v-for="(feature, index) in features" :key="index">
          <tr class="bg-tlo-ciemne-2">
            <td :colspan="scootersTable.length" class="px-4 py-1">
              {{ feature.name }}
            </td>
          </tr>
          <tr class="mb-3 pb-3">
            <!-- Feature description -->
            <td
              v-for="scooter in scootersTable"
              :key="scooter.name"
              class="pt-3 pb-6 even:pl-3 odd:pr-3 last:border-b-1 odd:border-r border-jasny-ciemny-zielen border-dashed"
            >
              <mark-done
                class="mx-auto"
                v-if="scooter.features[feature.key] === true"
              />
              <span v-else> {{ scooter.features[feature.key] }}</span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <Button
    @click="toggleTable"
    class="mx-auto"
    btn-type="secondary"
    :arrow-up="btnShowLess"
    :arrow-down="btnShowMore"
  >
    {{ btnShowMore ? "Spezifikation erweitern" : "Spezifikation reduzieren" }}
  </Button>
</template>
