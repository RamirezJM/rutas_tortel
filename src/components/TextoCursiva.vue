<script setup>
import { computed } from 'vue';

const props = defineProps({
  texto: {
    type: String,
    required: true
  }
});

// Procesa el texto: busca _texto_  y lo convierte en <em>texto</em>
const textoProcesado = computed(() => {
  if (!props.texto) return '';

  // Regex: captura el contenido entre guiones bajos
  // El modificador /g asegura que reemplace todas las ocurrencias
  // Se usa un grupo de captura ($1) para mantener el texto interno
  return props.texto
    .replace(/_([^_]+)_/g, '<em>$1</em>')
});
</script>

<template>
  <span v-html="textoProcesado"></span>
</template>
