<script setup>
import Logo from "./decorative/Logo.vue";
import DesktopNav from "./Header/DesktopNav.vue";
import BurgerBtn from "./utils/BurgerBtn.vue";
</script>

<template>
  <header class="sticky bg-tlo-jasne md:static top-0 z-50">
    <div
      class="relative flex justify-between lg:justify-start inset-0 z-10 pt-4 -mb-[58.5px]"
    >
      <!-- -mb-[58.5px] // header height -->
      <div class="h-8 w-[182px] lg:mr-8">
        <Logo />
      </div>

      <DesktopNav>
        <BurgerBtn @click="$emit('openMenu')" class="lg:hidden" />
      </DesktopNav>
    </div>
  </header>
</template>
