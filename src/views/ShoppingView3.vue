<script setup>
import ShoppingFooter from "@/components/Shopping/ShoppingFooter.vue";
import ShoppingHeader from "@/components/Shopping/ShoppingHeader.vue";
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import Btn from "@/components/utils/Btn.vue";
import OptionCard from "@/components/Shopping/OptionCard.vue";
import OptionCardContainer from "@/components/Shopping/OptionCardContainer.vue";
</script>

<template>
  <ShoppingLayout>
    <template #header>
      <ShoppingHeader currentStep="3" />
    </template>

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

      <Btn
        class="mt-12 mb-16 mr-auto px-0 text-[16px]"
        btnType="tertiary"
        :arrow-left="true"
        >Zurück</Btn
      >
    </template>

    <template #footer>
      <ShoppingFooter :total-price="0" />
    </template>
  </ShoppingLayout>
</template>
