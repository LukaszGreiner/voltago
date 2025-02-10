<script setup>
import OptionCardContainer from "@/components/shopping/OptionCardContainer.vue";
import OptionCard from "@/components/shopping/OptionCard.vue";
import { useOrder } from "../composables/useOrder";
import { useCart } from "../composables/useCart";

const { order, updateOrder } = useOrder();
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
    deliveryCost: 100,
  },
];

const handleOptionChange = (el) => {
  const deliveryCost = el.deliveryCost || 0;

  updateOrder({
    deliveryOption: el.deliveryOption,
  });
  updateCart({ deliveryCost: deliveryCost });
};
</script>

<template>
  <OptionCardContainer title="Art der Zustellung">
    <OptionCard
      v-for="el in deliveryOptions"
      name="Delivery option"
      :key="el.name"
      :option="el.name"
      :icon="el.icon"
      :lowerText="el.deliveryAdress"
      :additionalCost="el.deliveryCost"
      :checked="el.deliveryOption === order.deliveryOption"
      @change="handleOptionChange(el)"
    />
  </OptionCardContainer>
</template>
