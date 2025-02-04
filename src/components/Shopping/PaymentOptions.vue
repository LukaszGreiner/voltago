<script setup>
import OptionCardContainer from "@/components/shopping/OptionCardContainer.vue";
import OptionCard from "@/components/shopping/OptionCard.vue";
import { inject } from "vue";

const updateCart = inject("updateCart");

const paymentMethods = [
  {
    name: "Stripe - Kredit / Debitkarte",
    paymentMethod: "Stripe",
    icon: "stripe-icon",
    lowerText:
      "Wir akzeptieren Visa, Mastercard, American Express, Discover, Diners Club, JCB und UnionPay",
  },
  {
    name: "Klarna",
    paymentMethod: "Klarna",
    icon: "klarna-icon",
    lowerText: "Jetzt kaufen und in 30 Tagen bezahlen",
  },
  {
    name: "Zahlung bei Lieferung",
    paymentMethod: "Payment upon delivery",
    icon: "wallet-icon",
  },
];
</script>

<template>
  <OptionCardContainer title="Art der Zahlung">
    <OptionCard
      v-for="option in paymentMethods"
      :key="option.name"
      name="Payment method"
      :option="option.name"
      :icon="option.icon"
      :lowerText="option.lowerText"
      @change="updateCart({ paymentMethod: option.paymentMethod })"
    />
  </OptionCardContainer>
</template>
