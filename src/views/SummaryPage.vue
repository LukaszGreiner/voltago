<script setup>
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import SummaryCard from "@/components/Shopping/SummaryCard.vue";
import SummaryDetails from "@/components/Shopping/SummaryDetails.vue";
import TermsAndConditions from "@/components/Shopping/TermsAndConditions.vue";
import BackBtn from "@/components/utils/BackBtn.vue";
import Btn from "@/components/utils/Btn.vue";
</script>

<template>
  <ShoppingLayout currentStep="4" totalPrice="0" nextPage="#">
    <template #main>
      <div class="grid lg:grid-cols-2 lg:gap-20">
        <div class="max-w-[416px]">
          <SummaryCard class="lg:hidden block mx-auto mt-[64px]" />
          <SummaryDetails />
          <TermsAndConditions />
        </div>
        <SummaryCard class="hidden lg:block">
          <Btn class="mx-auto mt-6" arrowRight="after"
            >Bestellen und bezahlen</Btn
          >
        </SummaryCard>
      </div>
      <BackBtn />
    </template>
  </ShoppingLayout>
</template>
