<!-- src/components/icons/IconDuracion.vue -->
<script setup>
defineProps({
  color: {
    type: String,
    default: 'currentColor'
  },
  size: {
    type: Number,
    default: 24
  }
})
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 32 32" :fill="color" xmlns="http://www.w3.org/2000/svg">
    <!-- path del SVG descargado va aquí -->
    <path d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-6-2h4V14h-4zm-4 2H2V18h8zm-6-2h4v-8H4z" />
  </svg>
</template>
