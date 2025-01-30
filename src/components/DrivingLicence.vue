<script setup>
import ScootersImg from "./About/ScootersImg.vue";
import DrivingLicenceList from "./DrivingLicence/DrivingLicenceList.vue";
</script>

<template>
  <section id="drivinglicence" class="grid justify-center">
    <div class="xl:grid xl:grid-cols-2 items-center gap-[62.5px] xl:mt-20">
      <ScootersImg class="w-[328px] h-[247px]" />
      <DrivingLicenceList />
    </div>
  </section>
</template>
