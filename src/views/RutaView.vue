<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
/* import { useI18n } from 'vue-i18n' */
import { getRutaById } from '@/utils/rutaHelpers'
import MapaInteractivo from '@/components/ruta/MapaInteractivo.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'

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
    <section class="relative flex flex-col min-h-screen overflow-hidden">
      <img :src="ruta.imagen_portada" alt="" class="absolute object-cover object-top -z-10">
      <div :style="{ backgroundColor: ruta.color }" class="mix-blend-multiply absolute inset-0"></div>

      <AppNavbar />
    </section>

    <div class="p-12">
      <template v-if="ruta">
        <h1>{{ ruta.nombre }}</h1>

        <p>{{ ruta.descripcion }}</p>
        <!-- Se pasan los hitos y el color identificador de la ruta -->
        <MapaInteractivo :hitos="ruta.hitos" :color-ruta="ruta.color" />
      </template>
      <template v-else>
        <h1>ruta no encontrada</h1>
      </template>
    </div>
  </div>
</template>
