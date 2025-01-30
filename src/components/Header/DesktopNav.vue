<script setup>
const navItems = [
  { label: "Wer wir sind", href: "#about" },
  { label: "Modelle", href: "#models" },
  { label: "Führerschein", href: "#drivinglicence" },
  { label: "Optionen", href: "#options" },
  { label: "Kontakt", href: "#contact" },
];
</script>

<template>
  <nav class="ml-[32px]">
    <slot />
    <menu class="hidden lg:flex space-x-6 text-base">
      <li v-for="item in navItems" :key="item.label">
        <a
          :href="item.href"
          class="text-ciemny-zielony hover:underline hover:decoration-dashed"
          >{{ item.label }}</a
        >
      </li>
    </menu>
  </nav>
</template>
