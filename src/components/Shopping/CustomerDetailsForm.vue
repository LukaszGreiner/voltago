<script setup>
import FormField from "@/components/utils/FormField.vue";
import PhoneFormField from "@/components/utils/PhoneFormField.vue";
</script>

<template>
  <div class="mb-14">
    <h3 class="text-[18px] leading-[25.2px] font-[500] tracking-[0.03em] mb-2">
      Ihre Daten
    </h3>
    <div class="grid grid-cols-2 gap-y-4 gap-x-2 w-[328px]">
      <FormField label="Vorname" class="col-span-2" />
      <FormField label="Nachname" class="col-span-2" />
      <FormField type="email" label="Email" class="col-span-2" />
      <PhoneFormField class="col-span-2" :required="true" />
      <FormField placeholder="Straße*" :required="true" />
      <FormField placeholder="Nr*" :required="true" />
      <FormField placeholder="PLZ*" :required="true" />
      <FormField placeholder="Ort*" :required="true" />
    </div>
  </div>
</template>
