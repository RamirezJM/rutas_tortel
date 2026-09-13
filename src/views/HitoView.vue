<script setup>
// HitoView.vue — Página de detalle de un hito
// Recibe :rutaId y :hitoId desde la URL
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getHitoById, getHitosAdyacentes } from '@/utils/rutaHelpers'
/* import { useImageSchema } from '@/composables/useImageSchema' */
import AppNavbar from '@/components/layout/AppNavbar.vue'
import { getRutaById } from '@/utils/rutaHelpers'
import IconLeft from '../components/icons/IconLeft.vue'
import IconRight from '@/components/icons/IconRight.vue'

const { t } = useI18n()
const route = useRoute()

const ruta = computed(() => getRutaById(route.params.rutaId))
const hito = computed(() => getHitoById(route.params.rutaId, route.params.hitoId))
const adyacentes = computed(() => getHitosAdyacentes(route.params.rutaId, route.params.hitoId))

// Inyecta el schema.org ImageObject en el <head> cuando el hito está disponible
// Protección de fotografías via datos estructurados
/* if (hito.value) {
  useImageSchema(hito.value, `/ruta/${route.params.rutaId}/hito/${route.params.hitoId}`)
} */
</script>

<template>
  <div>

    <section class="bg-gray-700 max-w-6xl mx-auto">
      <AppNavbar />

    </section>
    <div class="p-12">

      <template v-if="hito">
        <div class="flex flex-col items-center gap-6">
          <h1 class="text-2xl font-medium font-serif text-center">{{ hito.nombre }}</h1>
          <p class="max-w-2xl">{{ hito.descripcion_completa }}</p>
          <img :src="hito.imagen" alt="" class=" aspect-video object-cover w-full max-w-4xl mx-auto my-8">
        </div>





        <!-- Navegación anterior / siguiente -->
        <nav class="flex gap-6 justify-between items-center my-12 w-full max-w-4xl mx-auto">
          <router-link v-if="adyacentes.anterior" :to="`/ruta/${route.params.rutaId}/hito/${adyacentes.anterior.id}`"
            class="me-auto flex flex-col items-center">
            <IconLeft :color="ruta.color" :size="80" />
            <p class="text-lg font-medium">Anterior</p>
            <p class="text-center">{{ adyacentes.anterior.nombre }}</p>

          </router-link>
          <router-link v-if="adyacentes.siguiente" :to="`/ruta/${route.params.rutaId}/hito/${adyacentes.siguiente.id}`"
            class="ms-auto flex flex-col items-center">
            <IconRight :color="ruta.color" :size="80" />
            <p class="text-lg font-medium">Siguiente</p>
            <p class="text-center">{{ adyacentes.siguiente.nombre }}</p>
          </router-link>
        </nav>
      </template>
      <template v-else>
        <h1>{{ t('general.no_encontrado') }}</h1>
      </template>
    </div>
  </div>

</template>
