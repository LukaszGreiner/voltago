<script setup>
import OptionCardContainer from "@/components/shopping/OptionCardContainer.vue";
import OptionCard from "@/components/shopping/OptionCard.vue";
import { useCart } from "../composables/useCart";

const { updateCart } = useCart();

const deliveryOptions = [
  {
    name: "Persönliche Abholung im Lager",
    deliveryOption: "Personal collection from the warehouse",
    icon: "garage-icon",
    deliveryAdress: "Theaterstrasse 22, 53111 Bonn",
  },
  {
    name: "Lieferung an die angegebene Adresse",
    deliveryOption: "Delivery to the specified address",
    icon: "home-icon",
    additionalCost: "100",
  },
];
</script>

<template>
  <OptionCardContainer title="Art der Zustellung">
    <OptionCard
      v-for="option in deliveryOptions"
      name="Delivery option"
      :key="option.name"
      :option="option.name"
      :icon="option.icon"
      :lowerText="option.deliveryAdress"
      :additionalCost="option.additionalCost"
      @change="updateCart({ deliveryMethod: option.deliveryOption })"
    />
  </OptionCardContainer>
</template>
