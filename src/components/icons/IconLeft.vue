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
    <path
      d="M20 15h-8v3.586a1 1 0 0 1-1.707.707l-6.586-6.586a1 1 0 0 1 0-1.414l6.586-6.586A1 1 0 0 1 12 5.414V9h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z" />
  </svg>
</template>
