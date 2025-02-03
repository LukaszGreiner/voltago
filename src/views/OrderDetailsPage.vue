<script setup>
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import CustomerDetailsForm from "@/components/Shopping/CustomerDetailsForm.vue";
import PaymentOptions from "@/components/Shopping/PaymentOptions.vue";
import DeliveryOptions from "@/components/Shopping/DeliveryOptions.vue";
import BackBtn from "@/components/utils/BackBtn.vue";
</script>

<template>
  <ShoppingLayout currentStep="3" totalPrice="0" nextPage="summarypage">
    <template #main>
      <CustomerDetailsForm />
      <PaymentOptions class="mb-14" />
      <DeliveryOptions />
      <p class="mr-auto text-[12px] leading-[19.2px] text-ciemny-zielony">
        *Obligatorish
      </p>

      <BackBtn />
    </template>
  </ShoppingLayout>
</template>
