<script setup>
import HeroSm from "@/assets/images/hero-sm.jpg"
import HeroMd from "@/assets/images/hero-md.jpg"
import HeroLg from "@/assets/images/hero-lg.jpg"
</script>

<template>
  <header class="w-full h-50 overflow-hidden">
    <picture>
      <source media="(max-width:600px)" :srcset="HeroSm">
      <source media="(max-width:900px)" :srcset="HeroMd">
      <img :src="HeroLg" alt="" class=" absolute w-full h-auto inset-0 object-center">
    </picture>
  </header>
</template>
