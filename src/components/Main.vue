<script setup>
import DashedSplineVue from "./decorative/DashedSpline.vue";
import BgImage from "./Main/BgImage.vue";
import CallToAction from "./Main/CallToAction.vue";
import DashedSpline from "./decorative/DashedSpline.vue";
</script>

<template>
  <main
    class="flex flex-col place-items-center lg:grid lg:grid-cols-2 lg:gap-16 lg:h-screen"
  >
    <BgImage />
    <CallToAction />
  </main>
  <dashed-spline class="lg:hidden" />
</template>
