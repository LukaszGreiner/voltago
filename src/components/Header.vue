<script setup lang="ts">
import DesktopNav from "@/Header/DesktopNav.vue";
import Logo from "./decorative/Logo.vue";
import BurgerButton from "./icons/burger-button.vue";
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
        <Button
          @click="$emit('openMenu')"
          class="h-9 w-15 lg:hidden"
          type="button"
        >
          <burger-button />
        </Button>
      </DesktopNav>
    </div>
  </header>
</template>
