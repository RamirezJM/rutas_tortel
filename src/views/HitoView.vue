<script setup>
// HitoView.vue — Página de detalle de un hito
// Recibe :rutaId y :hitoId desde la URL
import { computed } from 'vue'
import { useRoute } from 'vue-router'
/* import { useI18n } from 'vue-i18n' */
import Carousel from 'primevue/carousel'
import { getHitoById, getHitosAdyacentes } from '@/utils/rutaHelpers'
/* import { useImageSchema } from '@/composables/useImageSchema' */
import AppNavbar from '@/components/layout/AppNavbar.vue'
import { getRutaById } from '@/utils/rutaHelpers'
import IconLeft from '../components/icons/IconLeft.vue'
import IconRight from '@/components/icons/IconRight.vue'

/* const { t } = useI18n() */
const route = useRoute()

const ruta = computed(() => getRutaById(route.params.rutaId))
const hito = computed(() => getHitoById(route.params.rutaId, route.params.hitoId))
const adyacentes = computed(() => getHitosAdyacentes(route.params.rutaId, route.params.hitoId))
const isGaleria = computed(() => (hito.value?.galeria?.length ?? 0) > 1)

// Inyecta el schema.org ImageObject en el <head> cuando el hito está disponible
// Protección de fotografías via datos estructurados
/* if (hito.value) {
  useImageSchema(hito.value, `/ruta/${route.params.rutaId}/hito/${route.params.hitoId}`)
} */
</script>

<template>
  <div>

    <section class="bg-[#0b3c44] max-w-6xl mx-auto">
      <AppNavbar />

    </section>
    <div class="p-12">

      <template v-if="hito">
        <div class="flex flex-col items-center gap-6">
          <div class="flex justify-center items-center gap-6">
            <img :src="hito.icono" :alt="hito.nombre" class="w-20">
            <h1 class="text-xl font-medium font-serif text-center">{{ hito.nombre }}</h1>
          </div>

          <p class="max-w-2xl">{{ hito.descripcion }}</p>

          <Carousel v-if="isGaleria" :key="hito.id" :value="hito.galeria" :num-visible="1" :num-scroll="1"
            class="mb-2 hito-slider">
            <template #item="{ data }">
              <img :src="data" :alt="hito.nombre" width="1200" height="800"
                :loading="hito.galeria.indexOf(data) === 0 ? 'eager' : 'lazy'"
                :fetchpriority="hito.galeria.indexOf(data) === 0 ? 'high' : 'auto'"
                class="w-full h-auto object-contain rounded-sm" />
            </template>
          </Carousel>

          <img v-else-if="hito.galeria?.length === 1" :src="hito.galeria[0]" :alt="hito.nombre" width="1200"
            height="800" fetchpriority="high" class="w-full h-auto aspect-3/2 object-contain rounded-sm mb-2" />





          <!-- <img :src="hito.imagen" alt="" class=" aspect-video object-cover w-full max-w-6xl mx-auto my-8"> -->
        </div>





        <!-- Navegación anterior / siguiente -->
        <nav class="flex gap-6 justify-between items-center my-4 w-full max-w-4xl mx-auto">
          <router-link v-if="adyacentes.anterior" :to="`/ruta/${route.params.rutaId}/hito/${adyacentes.anterior.id}`"
            class="me-auto flex flex-col flex-1 items-center h-50">
            <IconLeft :color="ruta.color" :size="80" />
            <p class="text-lg font-semibold">Anterior</p>
            <p class="text-center">{{ adyacentes.anterior.nombre }}</p>

          </router-link>
          <router-link v-if="adyacentes.siguiente" :to="`/ruta/${route.params.rutaId}/hito/${adyacentes.siguiente.id}`"
            class="ms-auto flex flex-col flex-1 items-center h-50">
            <IconRight :color="ruta.color" :size="80" />
            <p class="text-lg font-semibold">Siguiente</p>
            <p class="text-center">{{ adyacentes.siguiente.nombre }}</p>
          </router-link>
        </nav>
      </template>
      <template v-else>
        <h1>Hito no encontrado</h1>
      </template>
    </div>
  </div>

</template>


<style scoped>
/* Confirma los nombres de clase en DevTools: pueden variar levemente */
:deep(.p-carousel-content-container) {
  position: relative;
}

.hito-slider:deep(.p-carousel-prev-button),
.hito-slider:deep(.p-carousel-next-button) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: rgb(0 0 0 / 0.8);
  color: white;
}

.hito-slider:deep(.p-carousel-prev-button) {
  left: 0.5rem;
}

.hito-slider:deep(.p-carousel-next-button) {
  right: 0.5rem;
}
</style>
