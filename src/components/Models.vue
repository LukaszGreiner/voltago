<script setup>
import ModelsHeading from "./Models/ModelsHeading.vue";
import ScooterCards from "./Models/ScooterCards.vue";
import ScootersComparison from "./Models/ScootersComparison.vue";
</script>

<template>
  <section>
    <ModelsHeading />
    <ScooterCards />
    <template>
      <div class="bg-gray-100 p-6 rounded-lg shadow-md">
        <div class="flex justify-between">
          <div>
            <h3 class="text-lg font-bold mb-2">Elektro-Roller ZX-500</h3>
            <p class="text-sm text-gray-500">
              L1E-B für Führerschein Klasse AM und höher
            </p>
            <p class="text-sm text-gray-500">zugelassen für 2 Personen</p>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-2">Elektro-Roller DJ03-V55</h3>
            <p class="text-sm text-gray-500">
              L3e-A1 für Führerschein Klasse A1 ab 15.5 Jahren
            </p>
            <p class="text-sm text-gray-500">zugelassen für 2 Personen</p>
          </div>
        </div>

        <div class="flex justify-between mt-4">
          <div>
            <h4 class="text-md font-semibold mb-1">Geschwindigkeit</h4>
            <p class="text-sm text-gray-500">45km/h in 3 Vorwahlstufen</p>
          </div>
          <div>
            <h4 class="text-md font-semibold mb-1">Geschwindigkeit</h4>
            <p class="text-sm text-gray-500">60km/h in 3 Vorwahlstufen</p>
          </div>
        </div>

        <div class="flex justify-between mt-4">
          <div>
            <h4 class="text-md font-semibold mb-1">Rückwärtsgang</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5L15 9m4.5 4.5L9 9m10.5 4.5L4.5 9m4.5 4.5L15 9m4.5 4.5L9 9"
              />
            </svg>
          </div>
          <div>
            <h4 class="text-md font-semibold mb-1">Rückwärtsgang</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5L15 9m4.5 4.5L9 9m10.5 4.5L4.5 9m4.5 4.5L15 9m4.5 4.5L9 9"
              />
            </svg>
          </div>
        </div>

        <div class="flex justify-between mt-4">
          <div>
            <h4 class="text-md font-semibold mb-1">
              Remote Control - Alarmsystem
            </h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5L15 9m4.5 4.5L9 9m10.5 4.5L4.5 9m4.5 4.5L15 9m4.5 4.5L9 9"
              />
            </svg>
          </div>
          <div>
            <h4 class="text-md font-semibold mb-1">
              Remote Control - Alarmsystem
            </h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5L15 9m4.5 4.5L9 9m10.5 4.5L4.5 9m4.5 4.5L15 9m4.5 4.5L9 9"
              />
            </svg>
          </div>
        </div>

        <div class="flex justify-between mt-4">
          <div>
            <h4 class="text-md font-semibold mb-1">
              USB Anschluss / Handy-Ladung während der Fahrt
            </h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5L15 9m4.5 4.5L9 9m10.5 4.5L4.5 9m4.5 4.5L15 9m4.5 4.5L9 9"
              />
            </svg>
          </div>
          <div>
            <h4 class="text-md font-semibold mb-1">
              USB Anschluss / Handy-Ladung während der Fahrt
            </h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5L15 9m4.5 4.5L9 9m10.5 4.5L4.5 9m4.5 4.5L15 9m4.5 4.5L9 9"
              />
            </svg>
          </div>
        </div>

        <button
          class="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5L15 9m4.5 4.5L9 9m10.5 4.5L4.5 9m4.5 4.5L15 9m4.5 4.5L9 9"
            />
          </svg>
          Spezifikation erweitern
        </button>
      </div>
    </template>
    <ScootersComparison />
  </section>
</template>
