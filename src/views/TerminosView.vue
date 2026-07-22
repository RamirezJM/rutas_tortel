<script setup>
// TerminosView.vue — Página de términos de uso
// Referenciada en el schema ImageObject como acquireLicensePage
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="p-12">
    <h1>{{ t('terminos.titulo') }}</h1>
    <p>{{ t('terminos.subtitulo') }}</p>
    <!-- Contenido completo de términos va aquí -->
  </div>
</template>
