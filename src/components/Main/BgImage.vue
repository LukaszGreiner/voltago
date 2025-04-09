<template>
  <!-- Hero background image -->
  <div class="ml-auto">
    <picture>
      <source
        media="(min-width: 1280px)"
        srcset="/img/Voltago-hero__desktop.png"
      />
      <source
        media="(min-width: 768px)"
        srcset="/img/Voltago-hero__tablet.jpg"
      />
      <!-- xl:max-h-[calc(100vh-175px)]  175px - height of the splain below the image on the large screen-->
      <img
        class="xl:max-h-[calc(100vh-175px)] w-auto"
        src="/img/Voltago-hero__mobile.jpg"
        alt="Hero Image"
      />
    </picture>
  </div>
</template>
