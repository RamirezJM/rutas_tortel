<script setup>
// HitoPanel.vue — Panel o modal con detalle del hito al hacer click en el mapa
// Recibe el hito activo como prop
defineProps({
  hito: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div v-if="hito">
    <h3>{{ hito.nombre }}</h3>
    <p>{{ hito.descripcion_breve }}</p>
    <router-link :to="`/ruta/${hito.rutaId}/hito/${hito.id}`">
      Ver más
    </router-link>
  </div>
</template>
