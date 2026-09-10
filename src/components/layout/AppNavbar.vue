<script setup>
// AppNavbar.vue
// Barra de navegación principal — transparente sobre imagen de fondo.
// Se importa en cada vista (HomeView, RutaView, HitoView) dentro
// del contenedor que tiene la imagen de fondo de esa vista.
//
// Elementos:
//   - Logo / nombre del sitio con enlace al inicio
//   - Links a las 3 rutas + inicio
//   - Toggle de idioma ES / EN
//   - Menú hamburguesa en móvil

import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { rutas } from '@/data/rutas'

const { t, locale } = useI18n()

// Estado del menú móvil
const menuAbierto = ref(false)

function toggleIdioma() {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}

function cerrarMenu() {
  menuAbierto.value = false
}
</script>

<template>
  <!--
    'relative z-10' asegura que el navbar quede sobre la imagen
    de fondo y el gradiente, que tienen z-index negativo.
    Sin position relative, z-index no tiene efecto.
  -->
  <nav class="relative z-10 w-full">

    <!-- Barra principal -->
    <div class="flex items-center justify-between px-6 py-10 md:px-12">

      <!-- Logo / nombre del sitio -->
      <router-link to="/"
        class="font-display text-white text-xl font-bold tracking-wide hover:opacity-80 transition-opacity"
        @click="cerrarMenu">
        <!-- Reemplazar con logo SVG cuando llegue guía de diseño -->
        Tortel
      </router-link>

      <!-- Links desktop — ocultos en móvil -->
      <ul class="hidden md:flex items-center gap-8">
        <li>
          <router-link to="/"
            class="text-white font-medium border border-white p-2 rounded-sm hover:text-pink-800 hover:border-pink-800 transition-colors"
            active-class="text-red-700 border border-red-700">
            {{ t('nav.inicio') }}
          </router-link>
        </li>
        <!--
          Genera un link por cada ruta en rutas.js.
          Si se agrega una ruta nueva al array, aparece automáticamente
          en el navbar sin tocar este componente.
        -->
        <li v-for="ruta in rutas" :key="ruta.id">
          <router-link :to="`/ruta/${ruta.id}`"
            class="text-white font-medium border border-white p-2 rounded-sm hover:text-pink-800 hover:border-pink-800  transition-colors"
            active-class="text-acento border-b border-acento">
            {{ ruta.nombre }}
          </router-link>
        </li>
      </ul>

      <!-- Controles derecha -->
      <div class="flex items-center gap-4">

        <!-- Toggle idioma -->
        <button @click="toggleIdioma"
          class="text-white text-sm font-medium border border-white/40 rounded px-2 py-1 hover:bg-white/10 transition-colors"
          :aria-label="locale === 'es' ? 'Switch to English' : 'Cambiar a español'">
          {{ locale === 'es' ? 'EN' : 'ES' }}
        </button>

        <!-- Botón hamburguesa — solo en móvil -->
        <button @click="menuAbierto = !menuAbierto" class="md:hidden text-white p-1"
          :aria-label="menuAbierto ? 'Cerrar menú' : 'Abrir menú'" :aria-expanded="menuAbierto">
          <!--
            Tres líneas que se transforman en X al abrir.
            La animación es CSS puro — sin librería.
            :class aplica clases condicionalmente según menuAbierto.
          -->
          <div class="w-6 flex flex-col gap-1.5">
            <span class="block h-0.5 bg-white transition-all duration-300"
              :class="menuAbierto ? 'rotate-45 translate-y-2' : ''"></span>
            <span class="block h-0.5 bg-white transition-all duration-300"
              :class="menuAbierto ? 'opacity-0' : ''"></span>
            <span class="block h-0.5 bg-white transition-all duration-300"
              :class="menuAbierto ? '-rotate-45 -translate-y-2' : ''"></span>
          </div>
        </button>

      </div>
    </div>

    <!--
      Menú móvil desplegable.
      v-show mantiene el elemento en el DOM (permite animar con CSS).
      bg-black/70 + backdrop-blur dan el efecto de panel oscuro
      semitransparente sobre la imagen de fondo.
      Transition de Vue anima la entrada y salida.
    -->
    <transition name="menu">
      <div v-show="menuAbierto" class="md:hidden bg-black/70 backdrop-blur-sm px-6 py-4 flex flex-col">
        <router-link to="/"
          class="text-white font-medium py-3 border-b border-white/10 hover:text-acento transition-colors"
          active-class="text-acento" @click="cerrarMenu">
          {{ t('nav.inicio') }}
        </router-link>

        <router-link v-for="ruta in rutas" :key="ruta.id" :to="`/ruta/${ruta.id}`"
          class="text-white font-medium py-3 border-b border-white/10 hover:text-acento transition-colors"
          active-class="text-acento" @click="cerrarMenu">
          {{ ruta.nombre }}
        </router-link>
      </div>
    </transition>

  </nav>
</template>

<style scoped>
/* Animación del menú móvil */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
