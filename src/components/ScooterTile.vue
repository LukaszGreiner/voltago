<script setup lang="ts">
import Button from './Button.vue';

</script>



<template>
<div class="h-[280px] w-[328px] pt-[11px] px-7 flex flex-col bg-neon-zielony-jasny border  rounded-md border-neon-zielony">
    <div class="flex items-center justify-center bg-red-200 ">
        <div class="grid justify-between px-4  w-full">
            <p>Elektro-Roller</p>
            <p>ZX-500</p>
        </div>
        <div class="h-[120px] w-[120px]">
            <img src="../assets/img/scooter-small-1.png" alt="ZX-500 scooter">
        </div>
    </div>
        <div class="flex flex-col gap-4 py-4">
            <Button>Elektroroller kaufen</Button>
            <Button btn-type="secondary">Download der Spezifikation </Button>
        </div>
    </div>
</template>