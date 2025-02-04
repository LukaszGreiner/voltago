<script setup>
import FormField from "@/components/utils/FormField.vue";
import PhoneFormField from "@/components/utils/PhoneFormField.vue";
import { useForm } from "../composables/useForm";
const { formDetails } = useForm();
</script>

<template>
  <div class="mb-14">
    <h3 class="text-[18px] leading-[25.2px] font-[500] tracking-[0.03em] mb-2">
      Ihre Daten
    </h3>
    <div class="grid grid-cols-2 gap-y-4 gap-x-2 w-[328px]">
      <FormField
        label="Vorname"
        class="col-span-2"
        v-model="formDetails.firstName"
      />
      <FormField
        label="Nachname"
        class="col-span-2"
        v-model="formDetails.lastName"
      />
      <FormField
        type="email"
        label="Email"
        class="col-span-2"
        v-model="formDetails.email"
      />
      <PhoneFormField
        class="col-span-2"
        :required="true"
        v-model="formDetails.phoneCountryCode"
      >
        <!-- Phone Number Input -->
        <FormField
          type="tel"
          placeholder="Telefon*"
          :required="true"
          v-model="formDetails.localPhone"
        />
      </PhoneFormField>
      <FormField
        placeholder="Straße*"
        :required="true"
        v-model="formDetails.street"
      />
      <FormField
        placeholder="Nr*"
        :required="true"
        v-model="formDetails.houseNumber"
      />
      <FormField
        placeholder="PLZ*"
        :required="true"
        v-model="formDetails.postalCode"
      />
      <FormField
        placeholder="Ort*"
        :required="true"
        v-model="formDetails.city"
      />
    </div>
  </div>
</template>
