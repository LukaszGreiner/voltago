<script setup>
import DashedSplineHorizontalLong from "../decorative/DasheSplineHorizontalLong.vue";
</script>
<template>
  <!-- Hero background image -->
  <div
    class="lg:absolute lg:inset-0 flex flex-col lg:flex-1 items-center md:items-end md:justify-start justify-center w-screen"
  >
    <picture
      class="relative inset-0 lg:inset-auto lg:right-0 lg:top-0 w-full lg:h-1/2 lg:w-1/2 object-cover h-full"
    >
      <source
        media="(min-width: 1024px)"
        srcset="/src/assets/img/Voltago-hero__desktop.png"
      />
      <source
        media="(min-width: 768px)"
        srcset="/src/assets/img/Voltago-hero__tablet.jpg"
      />
      <img src="/src/assets/img/Voltago-hero__mobile.jpg" alt="Hero Image" />
      <dashed-spline-horizontal-long
        class="hidden lg:block -mt-20 -mr-10 w-full"
      />
    </picture>
  </div>
</template>
