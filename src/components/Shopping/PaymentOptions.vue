<script setup>
import OptionCardContainer from "@/components/shopping/OptionCardContainer.vue";
import OptionCard from "@/components/shopping/OptionCard.vue";
import { useCart } from "../composables/useCart";

const { cart, updateCart } = useCart();
const paymentOptions = [
  {
    name: "Stripe - Kredit / Debitkarte",
    paymentOption: "Stripe",
    icon: "stripe-icon",
    lowerText:
      "Wir akzeptieren Visa, Mastercard, American Express, Discover, Diners Club, JCB und UnionPay",
  },
  {
    name: "Klarna",
    paymentOption: "Klarna",
    icon: "klarna-icon",
    lowerText: "Jetzt kaufen und in 30 Tagen bezahlen",
  },
  {
    name: "Zahlung bei Lieferung",
    paymentOption: "Payment upon delivery",
    icon: "wallet-icon",
  },
];
</script>

<template>
  <OptionCardContainer title="Art der Zahlung">
    <OptionCard
      v-for="el in paymentOptions"
      :key="el.name"
      name="Payment option"
      :option="el.name"
      :icon="el.icon"
      :lowerText="el.lowerText"
      :checked="el.name === cart.paymentOption"
      @change="updateCart({ paymentOption: el.name })"
    />
  </OptionCardContainer>
</template>
