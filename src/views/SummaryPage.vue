<script setup>
import { useCart } from "@/components/composables/useCart";
import { useForm } from "@/components/composables/useForm";
import { useOrder } from "@/components/composables/useOrder";
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import ShoppingFooter from "@/components/Shopping/ShoppingFooter.vue";
import SummaryCard from "@/components/Shopping/SummaryCard.vue";
import SummaryDetails from "@/components/Shopping/SummaryDetails.vue";
import TermsAndConditions from "@/components/Shopping/TermsAndConditions.vue";
import BackBtn from "@/components/utils/BackBtn.vue";
import NextPageBtn from "@/components/utils/NextPageBtn.vue";
import Btn from "@/components/utils/Btn.vue";
import { computed } from "vue";
const { cartDataFilled } = useCart();
const { formFilled } = useForm();
const { orderFilled } = useOrder();

const canOrder = computed(() => {
  return cartDataFilled.value && formFilled.value && orderFilled.value;
});
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
          <Btn :disabled="!canOrder" class="mx-auto mt-6" arrowRight="after"
            >Bestellen und bezahlen</Btn
          >
        </SummaryCard>
      </div>
      <BackBtn />
    </template>
    <template #footer>
      <ShoppingFooter class="lg:hidden">
        <NextPageBtn to="summarypage" :disabled="!canOrder" />
      </ShoppingFooter>
    </template>
  </ShoppingLayout>
</template>
