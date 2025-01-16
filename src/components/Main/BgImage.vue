<template>
  <!-- Hero background image -->
  <div
    class="flex lg:flex-1 items-center md:items-end md:justify-start justify-center h-auto"
  >
    <picture
      class="absolute inset-0 lg:inset-auto lg:right-0 lg:top-0 w-full lg:h-1/2 lg:w-1/2 object-cover"
    >
      <source
        media="(min-width: 1024px)"
        srcset="/src/assets/img/Voltago-hero__desktop.png"
      />
      <source
        media="(min-width: 720px)"
        srcset="/src/assets/img/Voltago-hero__tablet.jpg"
      />
      <img src="/src/assets/img/Voltago-hero__mobile.jpg" alt="Hero Image" />
    </picture>
  </div>
</template>
