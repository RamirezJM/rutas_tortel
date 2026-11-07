<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
/* import { useI18n } from 'vue-i18n' */
import Carousel from 'primevue/carousel'
import { getRutaById } from '@/utils/rutaHelpers'
import MapaInteractivo from '@/components/ruta/MapaInteractivo.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import IconDificultad from '@/components/icons/IconDificultad.vue'
import IconDistancia from '@/components/icons/IconDistancia.vue'
import IconDuracion from '../components/icons/IconDuracion.vue'

/* const { t } = useI18n() */
const route = useRoute()

const ruta = computed(() => getRutaById(route.params.rutaId))
/* const getImageUrl = (nombre) => {
  if (!nombre) return ''
  return new URL(`../assets/images/${nombre}`, import.meta.url).href
} */
</script>

<template>
  <div>
    <!--  <section class="relative flex flex-col min-h-screen overflow-hidden max-w-8xl mx-auto">
      <img :src="ruta.imagen_portada" alt="" class="absolute w-full h-full object-cover object-top -z-10">
      <div :style="{ backgroundColor: ruta.color }" class="mix-blend-multiply absolute inset-0"></div>

      <AppNavbar />
    </section> -->


    <section class="relative isolate">

      <Carousel :value="ruta.galeria" :num-visible="1" :num-scroll="1" circular :autoplay-interval="6000"
        :show-navigators="false" :show-indicators="false">
        <template #item="{ data }">
          <img :src="data" :alt="ruta.nombre" width="1500" height="1000"
            :loading="ruta.galeria.indexOf(data) === 0 ? 'eager' : 'lazy'"
            :fetchpriority="ruta.galeria.indexOf(data) === 0 ? 'high' : 'auto'" class="w-full h-screen object-cover" />
        </template>
      </Carousel>

      <div class="absolute inset-0 pointer-events-none mix-blend-multiply" :style="{ backgroundColor: ruta.color }">
      </div>

      <!-- Navbar y título sobre la imagen -->
      <div class="absolute inset-0 flex flex-col pointer-events-none">
        <AppNavbar class="pointer-events-auto" />
        <div class="flex-1 flex items-center justify-center px-6 text-center">
          <!-- <h1 class="font-display text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            {{ ruta.nombre }}
          </h1> -->
        </div>
      </div>

    </section>


    <section class="intro flex flex-col gap-6 items-center max-w-6xl my-6 mx-auto px-12">
      <template v-if="ruta">
        <h2 class="font-display text-3xl font-semibold text-center relative">
          {{ ruta.nombre }}
          <div class="w-60 h-8 absolute -mt-5 translate-x-30 -z-1 opacity-50" :style="{ backgroundColor: ruta.color }">
          </div>
        </h2>
        <p class="text-xl font-medium text-center my-2">{{ ruta.bajada_titulo }}</p>
        <p v-for="(parrafo, i) in ruta.descripcion_ruta" :key="i" class="max-w-2xl mx-auto">{{ parrafo }}</p>
        <MapaInteractivo :hitos="ruta.hitos" :trazado="ruta.trazado" :trazado-opcional="ruta.trazadoOpcional"
          :color-ruta="ruta.color" :key="route.params.rutaId" class="my-8" />

        <section class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 my-8">
          <div class="flex flex-col items-center gap-6 bg-gray-100 shadow-lg p-8 rounded-md">
            <h2 class="text-lg font-medium">Distancia</h2>
            <p>{{ ruta.distancia }}</p>
            <IconDistancia :color="ruta.color" :size="80" class="-order-1" />
          </div>
          <div class="flex flex-col items-center gap-6 bg-gray-100 shadow-lg p-8 rounded-md">
            <h2 class="text-lg font-medium">Dificultad</h2>
            <p>{{ ruta.dificultad }}</p>
            <IconDificultad :color="ruta.color" :size="80" class="-order-1" />

          </div>
          <div class="flex flex-col items-center gap-6 bg-gray-100 shadow-lg p-8 rounded-md">
            <h2 class="text-lg font-medium">Duración</h2>
            <p>{{ ruta.duracion }}</p>
            <IconDuracion :color="ruta.color" :size="80" class="-order-1" />
          </div>

        </section>

        <section class="px-12 max-w-6xl">
          <h3 class="text-display text-2xl font-semibold text-center">Lo que descubrirás</h3>
          <div v-for="car in ruta.caracteristicas" :key="car.titulo">
            <h4>{{ car.titulo }}</h4>
            <p>{{ car.descripcion }}</p>
          </div>
        </section>

        <section class="px-12 max-w-6xl">
          <h3 class="text-display text-2xl font-semibold text-center">Recorrido</h3>
          <p>{{ ruta.recorrido.introduccion }}</p>
          <ul class="ps-4">
            <li v-for="tip in ruta.recorrido.consejos" :key="tip.consejo" class="relative my-2">
              <span class="absolute -left-4 top-2 size-2 rounded-full" :style="{ backgroundColor: ruta.color }"></span>
              <strong>{{ tip.consejo }}:</strong>
              {{ tip.descripcion }}
            </li>
          </ul>
        </section>

      </template>
      <template v-else>
        <h1>ruta no encontrada</h1>
      </template>
    </section>


  </div>
</template>
