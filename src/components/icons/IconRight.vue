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
  <svg :width="size" :height="size" viewBox="0 0 32 32" :fill="color" xmlns="http://www.w3.org/2000/svg"
    class="text-end">
    <!-- path del SVG descargado va aquí -->
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1" />
  </svg>
</template>
