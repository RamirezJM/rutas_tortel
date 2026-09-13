<script setup>
// RutaCard.vue — Card de cada ruta en la landing
// Recibe el objeto ruta completo como prop
import rutaImage from '@/assets/images/hero-md.jpg'

defineProps({
  ruta: {
    type: Object,
    required: true
  },
  numero: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <article class="flex flex-col md:flex-row gap-6 items-center odd:md:flex-row-reverse">
    <div class="text-center">
      <img :src="rutaImage" alt="" class=" object-cover">
    </div>

    <div class="flex flex-col gap-6 relative h-100 justify-center max-w-lg">
      <h2 class="text-emerald-900 font-medium text-3xl md:text-6xl md:text-center md:items-center">{{ ruta.nombre }}
      </h2>
      <p>{{ ruta.descripcion }}</p>
      <span class="absolute -top-5 left-0 text-9xl md:-top-20 md:text-[12rem] font-black opacity-30 -z-10"
        :style="{ color: ruta.color }">0{{ numero }}</span>
      <router-link :to="`/ruta/${ruta.id}`"
        class="text-lg font-semibold border border-emerald-900 w-fit py-1 px-2 rounded-md">Ver
        ruta</router-link>

    </div>

  </article>
</template>

<style scoped></style>
