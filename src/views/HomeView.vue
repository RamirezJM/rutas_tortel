<script setup>
// HomeView.vue — Landing page
// Contiene: AppHeader (navbar + hero) y la sección de cards de rutas
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/layout/AppHeader.vue'
import RutaCard from '@/components/home/RutaCard.vue'
import { rutas } from '@/data/rutas'

const { t } = useI18n()
</script>

<template>
  <div>
    <AppHeader />

    <section id="rutas" class="p-12">
      <h1>{{ t('rutas.titulo') }}</h1>
      <!-- RutaCard itera sobre el array de rutas — un componente por cada una -->
      <RutaCard v-for="ruta in rutas" :key="ruta.id" :ruta="ruta" />
    </section>
  </div>
</template>
