<script setup>
// RutaCard.vue — Card de cada ruta en la landing
// Recibe el objeto ruta completo como prop
defineProps({
  ruta: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article>
    <h2>{{ ruta.nombre }}</h2>
    <p>{{ ruta.descripcion }}</p>
    <router-link :to="`/ruta/${ruta.id}`">Ver ruta</router-link>
  </article>
</template>
