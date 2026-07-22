<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
/* import { useI18n } from 'vue-i18n' */
import { getRutaById } from '@/utils/rutaHelpers'
import MapaInteractivo from '@/components/ruta/MapaInteractivo.vue'

/* const { t } = useI18n() */
const route = useRoute()

const ruta = computed(() => getRutaById(route.params.rutaId))
</script>

<template>
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
</template>
