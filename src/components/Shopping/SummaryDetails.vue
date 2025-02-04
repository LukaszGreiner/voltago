<script setup>
import Btn from "@/components/utils/Btn.vue";
import TextField from "@/components/utils/TextField.vue";
import { useForm } from "@/components/composables/useForm";
import router from "@/router";
import { useCart } from "../composables/useCart";
const { formDetails, email, phoneNumber, fullName, fullAdress } = useForm();
const { cart } = useCart();
</script>

<template>
  <div class="w-full flex flex-col gap-12">
    <!--  -->
    <div>
      <div class="flex justify-between w-full">
        <h2 class="mb-2">Ihre Daten</h2>
        <Btn btn-type="tertiary" @click="router.back()">Ändern</Btn>
      </div>

      <div
        class="bg-tlo-ciemne px-4 py-1 divide-y divide-dashed divide-jasny-ciemny-ziele flex flex-col"
      >
        <TextField
          class="flex flex-col gap-[2px]"
          label="Vorname und Nachname"
          :disabled="true"
          v-model="fullName"
        />
        <TextField
          class="flex flex-col gap-[2px]"
          label="Email"
          :disabled="true"
          v-model="email"
        />
        <TextField
          class="flex flex-col gap-[2px]"
          label="Telefon"
          :disabled="true"
          v-model="phoneNumber"
        />
        <TextField
          class="flex flex-col gap-[2px]"
          label="Adresse"
          :disabled="true"
          v-model="fullAdress"
        />
      </div>
    </div>
    <!--  -->
    <div>
      <div class="flex justify-between w-full">
        <h2 class="mb-2">Art der Zustellung</h2>
        <Btn btn-type="tertiary" @click="router.back()">Ändern</Btn>
      </div>

      <div
        class="bg-tlo-ciemne px-4 py-1 divide-y divide-dashed divide-jasny-ciemny-ziele flex flex-col"
      >
        <TextField
          class="flex flex-col gap-[2px]"
          label="Persönliche Abholung im Lager"
          :disabled="true"
          v-model="fullAdress"
        />
      </div>
    </div>
    <!--  -->
    <div class="mb-12">
      <div class="flex justify-between w-full">
        <h2 class="mb-2">Art der Zahlung</h2>
        <Btn btn-type="tertiary" @click="router.back()">Ändern</Btn>
      </div>

      <div
        class="bg-tlo-ciemne divide-y divide-dashed divide-jasny-ciemny-ziele flex flex-col"
      >
        <div class="flex flex-col gap-[2px]">
          <input
            id="paymentMethod"
            class="text-[16px] leading-[22.4px] font-[500] text-ciemny-zielony bg-tlo-ciemne p-4"
            type="text"
            v-model="cart.paymentOption"
            :disabled="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
