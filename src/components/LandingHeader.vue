<script setup>
import DashedSpline from "./decorative/DashedSpline.vue";
import DashedSplineHorizontalLong from "./decorative/DashedSplineHorizontalLong.vue";
import Logo from "./decorative/Logo.vue";
import DesktopNav from "./Header/DesktopNav.vue";
import BgImage from "./Main/BgImage.vue";
import CallToAction from "./Main/CallToAction.vue";
import BurgerBtn from "./utils/BurgerBtn.vue";
</script>

<template>
  <header class="relative">
    <div
      class="flex h-[64px] p-4 md:px-12 xl:pl-20 items-center justify-between xl:justify-normal bg-tlo-jasne md:bg-transparent md:absolute xl:relative fixed top-0 z-40 w-full"
    >
      <Logo />
      <BurgerBtn @click="$emit('openMenu')" class="xl:hidden" />
      <DesktopNav class="hidden xl:block" />
    </div>
    <div
      class="max-h-[calc(100vh-64px)] xl:-mt-[64px] xl:grid xl:grid-cols-2 xl:grid-rows-[auto_1fr] justify-end relative"
    >
      <BgImage />

      <CallToAction
        class="-translate-y-1/3 xl:translate-y-0 xl:mt-0 flex flex-col justify-center xl:max-w-[528px] xl:row-start-1 px-4 md:px-0 md:ml-12 xl:ml-20 md:w-[502px]"
      />
      <DashedSpline class="ml-auto xl:hidden absolute right-0 bottom-0" />
    </div>
    <dashed-spline-horizontal-long class="hidden xl:block col-span-2 ml-auto" />
  </header>
</template>
