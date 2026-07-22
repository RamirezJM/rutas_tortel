<script setup>
// HitoView.vue — Página de detalle de un hito
// Recibe :rutaId y :hitoId desde la URL
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getHitoById, getHitosAdyacentes } from '@/utils/rutaHelpers'
/* import { useImageSchema } from '@/composables/useImageSchema' */

const { t } = useI18n()
const route = useRoute()

const hito = computed(() => getHitoById(route.params.rutaId, route.params.hitoId))
const adyacentes = computed(() => getHitosAdyacentes(route.params.rutaId, route.params.hitoId))

// Inyecta el schema.org ImageObject en el <head> cuando el hito está disponible
// Protección de fotografías via datos estructurados
/* if (hito.value) {
  useImageSchema(hito.value, `/ruta/${route.params.rutaId}/hito/${route.params.hitoId}`)
} */
</script>

<template>
  <div class="p-12">
    <template v-if="hito">
      <h1>{{ hito.nombre }}</h1>
      <p>{{ hito.descripcion_completa }}</p>
      <!-- Navegación anterior / siguiente -->
      <nav>
        <router-link v-if="adyacentes.anterior" :to="`/ruta/${route.params.rutaId}/hito/${adyacentes.anterior.id}`">
          ← {{ t('hito.anterior') }}
        </router-link>
        <router-link v-if="adyacentes.siguiente" :to="`/ruta/${route.params.rutaId}/hito/${adyacentes.siguiente.id}`">
          {{ t('hito.siguiente') }} →
        </router-link>
      </nav>
    </template>
    <template v-else>
      <h1>{{ t('general.no_encontrado') }}</h1>
    </template>
  </div>
</template>
