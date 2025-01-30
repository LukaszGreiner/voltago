<script setup>
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import BackBtn from "@/components/utils/BackBtn.vue";
import OptionCard from "@/components/Shopping/OptionCard.vue";
import OptionCardContainer from "@/components/Shopping/OptionCardContainer.vue";
</script>

<template>
  <ShoppingLayout currentStep="3" totalPrice="0" nextPage="summarypage">
    <template #main>
      <OptionCardContainer title="Art der Zustellung">
        <OptionCard
          option="Persönliche Abholung im Lager"
          icon="garage-icon"
          lowerText="Theaterstrasse 22, 53111 Bonn"
        />
        <OptionCard
          option="Lieferung an die angegebene Adresse"
          icon="home-icon"
          additionalCost="100"
        />
      </OptionCardContainer>

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

      <BackBtn />
    </template>
  </ShoppingLayout>
</template>
