<script setup lang="ts">
import FooterNav from "./Footer/FooterNav.vue";
</script>

<template>
  <!-- Footer -->
  <footer class="pt-10 flex flex-col items-left justify-center">
    <div class="px-4">
      <div class="grid gap-4 mb-12 items-left md:justify-center">
        <h2 class="text-[32px] leading-[44px] mb-6">Du hast noch Fragen?</h2>

        <div class="flex flex-col gap-4 md:gap-16 md:flex-row">
          <div class="grid">
            <strong
              class="text-base md:text-xl leading-6 font-normal mb-1 md:mb-2"
              >Telefon:</strong
            >
            <a class="text-lg md:text-2xl font-medium" href="tel:022828629440"
              >0228 / 286294-40</a
            >
          </div>

          <div class="grid">
            <strong
              class="text-base md:text-xl leading-6 font-normal mb-1 md:mb-2"
              >E-mail:</strong
            >
            <a
              class="text-lg md:text-2xl font-medium"
              href="mailto:info@voltago.de"
              >info@voltago.de</a
            >
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <img
          class="h-[129px] w-[200px] md:h-[207px] md:w-[324px]"
          src="/src/assets/img/contakt-avatar.png"
          alt="person talking on the phone"
        />
      </div>
    </div>
    <FooterNav />
  </footer>
</template>
