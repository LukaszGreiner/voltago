<script setup>
import Btn from "@/components/utils/Btn.vue";

import { ref } from "vue";

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
        <div class="flex flex-col gap-[2px]">
          <label
            class="text-ciemny-zielony text-[14px] font-[400] leading-[22.4px] mt-3"
            for="name"
            >Vorname und Nachname</label
          >
          <input
            id="name"
            class="text-[15px] leading-[21px] font-[500] mb-3 bg-tlo-ciemne"
            type="text"
            v-model="formData.name"
            :disabled="!isEditable"
          />
        </div>

        <div class="flex flex-col gap-[2px]">
          <label
            class="text-ciemny-zielony text-[14px] font-[400] leading-[22.4px] mt-3"
            for="email"
            >Email</label
          >
          <input
            id="email"
            class="mb-3 text-[15px] leading-[21px] font-[500] bg-tlo-ciemne"
            type="email"
            v-model="formData.email"
            :disabled="!isEditable"
          />
        </div>

        <div class="flex flex-col gap-[2px]">
          <label
            class="text-ciemny-zielony text-[14px] font-[400] leading-[22.4px] mt-3"
            for="phone"
            >Telefon</label
          >
          <input
            id="phone"
            class="mb-3 text-[15px] leading-[21px] font-[500] bg-tlo-ciemne"
            type="tel"
            v-model="formData.phone"
            :disabled="!isEditable"
          />
        </div>

        <div class="flex flex-col gap-[2px]">
          <label
            class="text-ciemny-zielony text-[14px] font-[400] leading-[22.4px] mt-3"
            for="address"
            >Adresse</label
          >
          <input
            id="address"
            class="mb-3 text-[15px] leading-[21px] font-[500] bg-tlo-ciemne"
            type="text"
            v-model="formData.address"
            :disabled="!isEditable"
          />
        </div>
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
        <div class="flex flex-col gap-[2px]">
          <label
            class="text-ciemny-zielony text-[14px] font-[400] leading-[22.4px] mt-3"
            for="name"
            >Persönliche Abholung im Lager</label
          >
          <input
            id="name"
            class="text-[15px] leading-[21px] font-[500] mb-3 bg-tlo-ciemne"
            type="text"
            v-model="formData.warehouseAdress"
            :disabled="!isEditable"
          />
        </div>
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
