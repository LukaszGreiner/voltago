<script setup>
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import SummaryCard from "@/components/Shopping/SummaryCard.vue";
import SummaryDetails from "@/components/Shopping/SummaryDetails.vue";
import TermsAndConditions from "@/components/Shopping/TermsAndConditions.vue";
import BackBtn from "@/components/utils/BackBtn.vue";

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
  <ShoppingLayout currentStep="4" totalPrice="0" nextPage="#">
    <template #main>
      <SummaryCard />
      <SummaryDetails />
      <TermsAndConditions />
      <BackBtn />
    </template>
  </ShoppingLayout>
</template>
