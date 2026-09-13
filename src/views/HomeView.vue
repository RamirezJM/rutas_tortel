<script setup>
// HomeView.vue — Landing page
// Contiene: hero con navbar superpuesto + sección de cards de rutas

import { useI18n } from 'vue-i18n'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import RutaCard from '@/components/home/RutaCard.vue'
import { rutas } from '@/data/rutas'
import HeroSm from '@/assets/images/hero-sm.jpg'
import HeroMd from '@/assets/images/hero-md.jpg'
import HeroLg from '@/assets/images/hero-lg.jpg'

const { t } = useI18n()
</script>

<template>
  <div>

    <!--
      Hero — contenedor con imagen de fondo y navbar superpuesto.
      'relative' permite que los hijos absolute se posicionen aquí.
      'min-h-screen' ocupa toda la pantalla al cargar.
    -->
    <section class="relative flex flex-col min-h-screen overflow-hidden max-w-6xl mx-auto">

      <!-- Imagen de fondo — tres tamaños para responsive -->
      <!--   <img :src="HeroSm" alt="" fetchpriority="high"
        class="absolute inset-0 w-full h-full object-cover object-center -z-10 block sm:hidden" />
      <img :src="HeroMd" alt="" fetchpriority="high"
        class="absolute inset-0 w-full h-full object-cover object-center -z-10 hidden sm:block md:hidden" />
      <img :src="HeroLg" alt="" fetchpriority="high"
        class="absolute inset-0 w-full h-full object-cover object-center -z-10 hidden md:block" /> -->

      <picture>
        <source media="(max-width:600px)" :srcset="HeroSm">
        <source media="(max-width:900px)" :srcset="HeroMd">
        <img :src="HeroLg" alt="" class="absolute object-cover object-bottom  -z-10">
      </picture>

      <div class="bg-emerald-600 mix-blend-multiply absolute inset-0"></div>

      <!--  <div class="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-emerald-900 to-transparent pointer-events-none">
      </div>
 -->

      <!-- Gradiente de legibilidad -->
      <!--    <div class="absolute inset-0 pointer-events-none -z-10" style="background: linear-gradient(to bottom,
          rgba(0,0,0,0.55) 0%,
          rgba(0,0,0,0.15) 40%,
          rgba(0,0,0,0.40) 100%)"></div> -->



      <!-- Navbar sobre la imagen -->
      <AppNavbar />

      <!-- Texto del hero -->
      <div class="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
        <h1 class="font-display text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg mb-4">
          <!-- {{ t('hero.titulo') }} -->
          Rutas Patrimoniales
        </h1>
        <!--   <p class="text-white/90 text-lg md:text-xl max-w-2xl drop-shadow mb-10">
          {{ t('hero.subtitulo') }}
        </p> -->
        <!--    <a href="#rutas"
          class="inline-block bg-acento text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg">
          {{ t('hero.cta') }}
        </a> -->
      </div>

    </section>

    <!-- Sección de rutas — fuera del hero, flujo normal -->
    <section id="rutas" class="py-16 px-6 md:px-12">
      <h2 class="font-display text-3xl font-semibold text-center mb-12">
        {{ t('rutas.titulo') }}
      </h2>
      <div class="grid grid-cols-1 gap-8 md:gap-16 lg:gap-32 max-w-6xl mx-auto">
        <RutaCard v-for="(ruta, index) in rutas" :key="ruta.id" :ruta="ruta" :numero="index + 1" />
      </div>
    </section>

  </div>
</template>
