<script setup>
import ScootersImg from "./About/ScootersImg.vue";
import DrivingLicenceList from "./DrivingLicence/DrivingLicenceList.vue";
</script>

<template>
  <section id="drivinglicence" class="xl:mt-40 mt-8 mx-auto mb-[102px]">
    <div
      class="flex flex-col xl:flex-row xl:gap-6 items-center xl:items-start justify-center"
    >
      <ScootersImg
        class="w-[328px] h-[247px] md:w-[475px] md:h-[361px] xl:w-[594px] xl:h-[454px] mb-2 md:mb-8 xl:mb-[0]"
      />

      <DrivingLicenceList class="md:[w-402px] xl:w-[516px]" />
    </div>
  </section>
</template>
