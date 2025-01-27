<template>
  <!-- mt-[64px] equals half of the height of the image positioned absolute outside of the container -->
  <div
    class="relative bg-neon-zielony-jasny border border-neon-zielony rounded-xl px-4 pb-6 pt-20 mt-[64px]"
  >
    <img
      class="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[124px] w-[133px]"
      src="/src/assets/img/scooter-small-1.png"
      alt="scooter"
    />
    <ul class="space-y-3 mb-6">
      <li class="flex justify-between">
        <p class="text-[15px] leading-[21px] font-[500] text-balance">
          Elektro-Roller ZX-500 - inkl.<br />
          Montage
        </p>
        <span class="ml-6 text-nowrap text-[16px] leading-[22.4px] font-[700]"
          >1 665 €</span
        >
      </li>
      <li class="flex justify-between">
        <p class="text-[15px] leading-[21px] font-[500] text-balance">
          BE – Batterie-Erweiterung - ohne Montage
        </p>
        <span class="ml-6 text-nowrap text-[16px] leading-[22.4px] font-[700]"
          >699 €</span
        >
      </li>
      <li class="flex justify-between">
        <p class="text-[15px] leading-[21px] font-[500] text-balance">
          CB - Sitzbank Farbe abweichend - inkl. Montage
        </p>
        <span class="ml-6 text-nowrap text-[16px] leading-[22.4px] font-[700]"
          >215 €</span
        >
      </li>
    </ul>
    <div class="bg-neon-zielony-jasny-2 px-6 py-[12.5px] rounded-xl">
      <p class="text-[15px] leading-[21px] font-[500] flex justify-between">
        Zu zahlender Betrag:
        <span class="font-[700px] text-[16px] leading-[22.4px]">2 579 €</span>
      </p>
    </div>
  </div>
</template>
