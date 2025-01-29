<script setup>
import Btn from "@/components/utils/Btn.vue";

import { ref } from "vue";
import TextField from "../utils/TextField.vue";

const isEditable = ref(false);
const formData = ref({
  name: "Sven Schwarz",
  email: "sven.schwarz@gmail.com",
  phone: "+49 0123456789",
  address: "Theaterstrasse 22, 53111 Bonn",
  deliveryMethod: "Persönliche Abholung im Lager",
  warehouseAdress: "Berlin, Strasse 50",
  paymentMethod: "Stripe - Kredit / Debitkarte",
});

const toggleEdit = () => {
  isEditable.value = !isEditable.value;
};
</script>

<template>
  <div class="w-full flex flex-col gap-12">
    <!--  -->
    <div>
      <div class="flex justify-between w-full">
        <h2 class="mb-2">Ihre Daten</h2>
        <Btn btn-type="tertiary" @click="toggleEdit">{{
          isEditable ? "Speichern" : "Ändern"
        }}</Btn>
      </div>

      <div
        class="bg-tlo-ciemne px-4 py-1 divide-y divide-dashed divide-jasny-ciemny-ziele flex flex-col"
      >
        <TextField
          class="flex flex-col gap-[2px]"
          label="Vorname und Nachname"
          :disabled="!isEditable"
          v-model="formData.name"
        />
        <TextField
          class="flex flex-col gap-[2px]"
          label="Email"
          :disabled="!isEditable"
          v-model="formData.email"
        />
        <TextField
          class="flex flex-col gap-[2px]"
          label="Telefon"
          :disabled="!isEditable"
          v-model="formData.phone"
        />
        <TextField
          class="flex flex-col gap-[2px]"
          label="Adresse"
          :disabled="!isEditable"
          v-model="formData.address"
        />
      </div>
    </div>
    <!--  -->
    <div>
      <div class="flex justify-between w-full">
        <h2 class="mb-2">Art der Zustellung</h2>
        <Btn btn-type="tertiary" @click="toggleEdit">{{
          isEditable ? "Speichern" : "Ändern"
        }}</Btn>
      </div>

      <div
        class="bg-tlo-ciemne px-4 py-1 divide-y divide-dashed divide-jasny-ciemny-ziele flex flex-col"
      >
        <TextField
          class="flex flex-col gap-[2px]"
          label="Persönliche Abholung im Lager"
          :disabled="!isEditable"
          v-model="formData.warehouseAdress"
        />
      </div>
    </div>
    <!--  -->
    <div>
      <div class="flex justify-between w-full">
        <h2 class="mb-2">Art der Zahlung</h2>
        <Btn btn-type="tertiary" @click="toggleEdit">{{
          isEditable ? "Speichern" : "Ändern"
        }}</Btn>
      </div>

      <div
        class="bg-tlo-ciemne px-4 py-1 divide-y divide-dashed divide-jasny-ciemny-ziele flex flex-col"
      >
        <div class="flex flex-col gap-[2px]">
          <input
            id="paymentMethod"
            class="text-[15px] leading-[21px] font-[500] bg-tlo-ciemne"
            type="text"
            v-model="formData.paymentMethod"
            :disabled="!isEditable"
          />
        </div>
      </div>
    </div>
  </div>
</template>
