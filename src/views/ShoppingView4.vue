<script setup>
import ShoppingFooter from "@/components/Shopping/ShoppingFooter.vue";
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import SummaryCard from "@/components/Shopping/SummaryCard.vue";
import SummaryDetails from "@/components/Shopping/SummaryDetails.vue";
import TermsAndConditions from "@/components/Shopping/TermsAndConditions.vue";

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
  <ShoppingLayout>
    <template #header>
      <ShoppingHeader currentStep="4" />
    </template>

    <template #main>
      <SummaryCard />
      <SummaryDetails />
      <TermsAndConditions />
    </template>

    <template #footer>
      <ShoppingFooter :total-price="0" />
    </template>
  </ShoppingLayout>
</template>
