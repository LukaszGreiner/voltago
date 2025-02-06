<script setup>
import ShoppingLayout from "@/components/Shopping/ShoppingLayout.vue";
import CustomerDetailsForm from "@/components/Shopping/CustomerDetailsForm.vue";
import PaymentOptions from "@/components/Shopping/PaymentOptions.vue";
import DeliveryOptions from "@/components/Shopping/DeliveryOptions.vue";
import BackBtn from "@/components/utils/BackBtn.vue";
import SummaryCard from "@/components/Shopping/SummaryCard.vue";
import ShoppingFooter from "@/components/Shopping/ShoppingFooter.vue";
import NextPageBtn from "@/components/utils/NextPageBtn.vue";
import { useCart } from "@/components/composables/useCart";
import { computed } from "vue";
import { useForm } from "@/components/composables/useForm";
import { useOrder } from "@/components/composables/useOrder";
const { formFilled } = useForm();
const { order } = useOrder();
const { cartDataFilled } = useCart();

function hasValidOrder() {
  return order?.paymentOption?.length > 0 && order?.deliveryOption?.length > 0;
}

const canGoToSummary = computed(() => {
  return hasValidOrder(order) && formFilled.value && cartDataFilled.value;
});
</script>

<template>
  <ShoppingLayout currentStep="3" totalPrice="0" nextPage="summarypage">
    <template #main>
      <div class="grid lg:grid-cols-2 gap-20">
        <div>
          <CustomerDetailsForm />
          <PaymentOptions class="mb-14" />
          <DeliveryOptions />
          <p class="mr-auto text-[12px] leading-[19.2px] text-ciemny-zielony">
            *Obligatorish
          </p>
        </div>
        <!-- Desktop -->
        <SummaryCard class="hidden lg:block">
          <NextPageBtn
            :disabled="!canGoToSummary"
            to="summarypage"
            class="w-[154px] mx-auto mt-6"
          />
        </SummaryCard>
        <!-- End of Desktop -->
      </div>

      <BackBtn />
    </template>
    <template #footer>
      <ShoppingFooter class="lg:hidden">
        <NextPageBtn to="summarypage" :disabled="!canGoToSummary" />
      </ShoppingFooter>
    </template>
  </ShoppingLayout>
</template>
