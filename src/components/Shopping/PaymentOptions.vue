<script setup>
import OptionCardContainer from "@/components/shopping/OptionCardContainer.vue";
import OptionCard from "@/components/shopping/OptionCard.vue";
</script>

<template>
  <OptionCardContainer title="Art der Zahlung">
    <OptionCard
      option="Stripe - Kredit / Debitkarte"
      icon="stripe-icon"
      lowerText="Wir akzeptieren Visa, Mastercard, American Express, Discover, Diners Club, JCB und UnionPay"
    />
    <OptionCard
      option="Klarna"
      icon="klarna-icon"
      lower-text="Jetzt kaufen und in 30 Tagen bezahlen"
    />
    <OptionCard option="Zahlung bei Lieferung" icon="wallet-icon" />
  </OptionCardContainer>
</template>
