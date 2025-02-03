<script setup>
import OptionCardContainer from "@/components/shopping/OptionCardContainer.vue";
import OptionCard from "@/components/shopping/OptionCard.vue";
</script>

<template>
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
</template>
