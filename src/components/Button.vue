<script setup>
import { ref } from 'vue';
import ArrowLeft from './icons/arrow-left.vue';
import ArrowRight from './icons/arrow-right.vue';
import ArrowDown from './icons/arrow-down.vue';

defineProps({
    btnType: {
        type: String,
        default: 'primary'
    },
    arrowRight: {
        type: Boolean,
        default: false
    },
    arrowLeft: {
        type: Boolean,
        default: false
    },
    arrowDown: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
})

const btnBase = "py-2 px-6 text-base font-bold rounded-[59px] flex justify-center"

const btnTypes = ref({
    // green
    primary: `${btnBase} bg-ciemny-zielony text-tlo-jasne disabled:bg-jasny-ciemny-zielen`,
    // transparent with outline
    secondary: `${btnBase} bg-transparent text-ciemny-zielony border-ciemny-zielony border-[1px] rounded-[59px]`

})
</script>

<template>
    <button :class="btnTypes[btnType]" :disabled="disabled">
    <div class="flex place-items-center gap-2">
        <ArrowLeft v-if="arrowLeft"/>
        <slot/>
        <ArrowRight v-if="arrowRight"/>
        <ArrowDown v-if="arrowDown"/>
    </div>
    </button>
</template>
    