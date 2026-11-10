<script setup>
// RutaCard.vue — Card de cada ruta en la landing
// Recibe el objeto ruta completo como prop
import { ref, onMounted } from 'vue'


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

const elemento = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        elemento.value.style.opacity = '0.4'
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  observer.observe(elemento.value)
})

</script>

<template>
  <article class="flex flex-col lg:flex-row gap-20 lg:gap-6 items-center odd:lg:flex-row-reverse">
    <div class="text-center md:flex-1">
      <img :src="ruta.imagen_portada" :alt="ruta.nombre" class=" object-cover">
    </div>

    <div class="flex flex-col lg:flex-1 gap-6 relative h-100 justify-center max-w-2xl">
      <h2 class="text-emerald-900 font-medium text-4xl lg:text-6xl lg:text-center lg:items-center">{{ ruta.nombre }}
      </h2>
      <p class="mt-10">{{ ruta.descripcion_card }}</p>
      <span class="absolute -top-20 left-0 text-9xl md:-top-10 lg:-top-20 lg:text-[12rem] font-black -z-10"
        :style="{ color: ruta.color }" ref="elemento">0{{ numero
        }}</span>
      <router-link :to="`/ruta/${ruta.id}`"
        class="text-lg font-semibold border border-emerald-900 w-fit py-1 px-2 rounded-md">Ver
        ruta</router-link>

    </div>

  </article>
</template>

<style scoped>
span {
  opacity: 0;
  transition: opacity 0.6s ease;
}
</style>
