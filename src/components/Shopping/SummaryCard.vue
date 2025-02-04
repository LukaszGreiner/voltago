<script setup>
import { useCart } from "@/components/composables/useCart";

const { totalPrice, cart } = useCart();
</script>

<template>
  <!-- SummaryCard -->
  <div
    class="w-[328px] relative bg-neon-zielony-jasny border border-neon-zielony rounded-xl px-4 pb-6 pt-20 mt-[64px]"
  >
    <!-- mt-[64px] equals half of the height of the image positioned absolute outside of the container -->
    <img
      class="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[124px] w-[133px]"
      src="/src/assets/img/scooter-small-1.png"
      alt="scooter"
    />
    <ul class="space-y-3 mb-6">
      <li class="flex justify-between">
        <p class="text-[15px] leading-[21px] font-[500]">
          Elektro-Roller {{ cart.model }}
          <span v-if="cart.withAssembly"> - inkl. Montage</span>
        </p>
        <span class="ml-6 text-nowrap text-[16px] leading-[22.4px] font-[700]"
          >{{ cart.basePrice }} €</span
        >
      </li>
      <li
        v-for="feature in cart.features"
        :key="feature.name"
        class="flex justify-between"
      >
        <p class="text-[15px] leading-[21px] font-[500] text-balance">
          {{ feature.name }}
          <span v-if="feature.withAssembly"> - inkl. Montage</span>
        </p>
        <span class="ml-6 text-nowrap text-[16px] leading-[22.4px] font-[700]"
          >{{ feature.price }} €</span
        >
      </li>
      <li v-if="cart.deliveryCost > 0" class="flex justify-between">
        <p class="text-[15px] leading-[21px] font-[500] text-balance">
          Versandkosten
        </p>
        <span class="ml-6 text-nowrap text-[16px] leading-[22.4px] font-[700]"
          >{{ cart.deliveryCost }} €</span
        >
      </li>
    </ul>
    <div class="bg-neon-zielony-jasny-2 px-6 py-[12.5px] rounded-xl">
      <p class="text-[15px] leading-[21px] font-[500] flex justify-between">
        Zu zahlender Betrag:
        <span class="font-[700px] text-[16px] leading-[22.4px]"
          >{{ totalPrice }} €</span
        >
      </p>
    </div>
  </div>
</template>
