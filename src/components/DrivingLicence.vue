<script setup>
import ScootersImg from "./About/ScootersImg.vue";
import DrivingLicenceList from "./DrivingLicence/DrivingLicenceList.vue";
</script>

<template>
  <section id="drivinglicence" class="grid justify-center">
    <div class="lg:grid lg:grid-cols-2 items-center gap-[62.5px]">
      <ScootersImg class="relative mt-20 lg:mt-0" />
      <DrivingLicenceList />
    </div>
  </section>
</template>
