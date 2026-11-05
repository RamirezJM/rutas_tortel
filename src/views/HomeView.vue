<script setup>
// HomeView.vue — Landing page
// Contiene: hero con navbar superpuesto + sección de cards de rutas

/* import { useI18n } from 'vue-i18n' */
import AppNavbar from '@/components/layout/AppNavbar.vue'
import RutaCard from '@/components/home/RutaCard.vue'
import { rutas } from '@/data/rutas'
import HeroSm from '@/assets/images/hero-sm.jpg'
import HeroMd from '@/assets/images/hero-md.jpg'
/* import HeroLg from '@/assets/images/hero-lg.jpg' */
import HeroNew from '@/assets/images/hero-new.jpg'

/* const { t } = useI18n() */
</script>

<template>
  <div>

    <!--
      Hero — contenedor con imagen de fondo y navbar superpuesto.
      'relative' permite que los hijos absolute se posicionen aquí.
      'min-h-screen' ocupa toda la pantalla al cargar.
    -->
    <section class="relative flex flex-col min-h-screen overflow-hidden max-w-8xl mx-auto">

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
        <img :src="HeroNew" alt="" class="absolute w-full h-full object-cover object-bottom -z-10">
      </picture>

      <!-- <div class="bg-primary mix-blend-multiply absolute inset-0"></div> -->
      <div class="bg-[#0b3c44] mix-blend-multiply absolute inset-0"></div>

      <!-- <div class="bg-fuchsia-400 mix-blend-multiply absolute inset-0"></div> -->
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
        <!--   <h1 class="text-white text-4xl md:text-8xl font-serif font-bold leading-tight drop-shadow-lg mb-4">

          Rutas de Tortel
        </h1> -->
        <h1
          class="flex flex-col items-start text-light text-5xl md:text-8xl font-display font-bold leading-tight drop-shadow-lg mb-4">
          <!-- Primera fila: "Rutas" + Círculos -->
          <div class="flex items-center gap-3">
            <span>Rutas</span>
            <div class="flex items-center gap-1.5">
              <span class="w-10 h-10 rounded-full bg-red-500"></span>
              <span class="w-10 h-10 rounded-full bg-amber-500"></span>
              <span class="w-10 h-10 rounded-full bg-emerald-500"></span>
            </div>
          </div>

          <!-- Segunda fila -->
          <span>de Tortel</span>
        </h1>

      </div>

    </section>

    <!-- Sección de rutas — fuera del hero, flujo normal -->
    <section id="rutas" class="py-16 px-6 md:px-12">
      <div class="mb-20 max-w-2xl mx-auto">
        <h2 class="font-display text-3xl font-semibold text-center mb-12">
          Sobre el proyecto
        </h2>
        <p class="my-2">Tortel tiene muchas historias que contar y distintas formas de descubrirlas.
        </p>
        <p class="my-2"> Rutas de Tortel es un proyecto de interpretación cultural y patrimonial que propone recorrer la
          localidad
          desde nuevas perspectivas, conectando sus paisajes con las historias, los oficios y las formas de vida de
          quienes la habitan. </p>
        <p class="my-2">A través de tres recorridos por tierra y agua, te invitamos a mirar más allá de lo evidente, a
          detenerte en
          los
          detalles y descubrir nuevas maneras de conocer este territorio.</p>
      </div>
      <div class="grid grid-cols-1 gap-8 md:gap-16 lg:gap-32 max-w-6xl mx-auto my-12 lg:my-6">
        <RutaCard v-for="(ruta, index) in rutas" :key="ruta.id" :ruta="ruta" :numero="index + 1" class="my-12" />
      </div>

      <div class="mb-20 max-w-2xl mx-auto">
        <h2 class="font-display text-3xl font-semibold text-center mb-12">
          Un proyecto construido con muchas voces
        </h2>
        <p class="my-2">
          Rutas de Tortel ha sido posible gracias a las personas que compartieron sus recuerdos, historias y
          conocimientos sobre la localidad. Sus relatos nos ayudaron a reconstruir parte de su historia, comprender las
          transformaciones del territorio y descubrir detalles que no siempre aparecen en los libros o archivos.
        </p>
        <p class="my-2">
          Agradecemos especialmente a quienes dedicaron su tiempo a conversar con nosotros y aportar sus experiencias
          para dar forma a los contenidos de estas rutas:
        </p>
        <ul class="my-2">
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ul>


      </div>

    </section>

  </div>
</template>
