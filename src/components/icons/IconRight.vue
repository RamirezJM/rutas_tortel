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
      d="M4 9h8V5.414a1 1 0 0 1 1.707-.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586A1 1 0 0 1 12 18.586V15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
  </svg>
</template>
