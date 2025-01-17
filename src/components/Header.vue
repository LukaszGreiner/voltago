<script setup></script>

<template>
  <header class="sticky bg-tlo-jasne md:static top-0 z-30">
    <!-- Logo & Menu Icon -->
    <div
      class="relative flex justify-between lg:justify-start inset-0 z-10 pt-4"
    >
      <div class="h-8 w-[182px] lg:mr-8">
        <img src="../assets/img/logo@3x1.svg" alt="voltago logo" />
      </div>
      <nav>
        <button
          @click="$emit('openMenu')"
          class="h-9 w-15 lg:hidden"
          type="button"
        >
          <img src="../assets/img/burger-button.svg" alt="menu button" />
        </button>
        <!-- Desktop Navigation -->
        <div class="hidden lg:flex space-x-6 text-base font-['DMSans']">
          <a
            href="#"
            class="text-ciemny-zielony hover:underline hover:decoration-dashed"
            >Wer wir sind</a
          >
          <a
            href="#"
            class="text-ciemny-zielony hover:underline hover:decoration-dashed"
            >Modelle</a
          >
          <a
            href="#"
            class="text-ciemny-zielony hover:underline hover:decoration-dashed"
            >Führerschein</a
          >
          <a
            href="#"
            class="text-ciemny-zielony hover:underline hover:decoration-dashed"
            >Optionen</a
          >
          <a
            href="#"
            class="text-ciemny-zielony hover:underline hover:decoration-dashed"
            >Kontakt</a
          >
        </div>
        <!-- End of Desktop Navigation -->
      </nav>
    </div>
  </header>
</template>
