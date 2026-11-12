<script setup>
import Logo from '@/assets/images/logo-sm.png'
import { useDialog } from 'primevue/usedialog';
import { defineAsyncComponent } from 'vue';

const dialog = useDialog();
const LegalContent = defineAsyncComponent(() => import('@/components/LegalContent.vue'));

const abrirLegal = (tipo) => {
  dialog.open(LegalContent, {
    props: {
      header: tipo === 'privacidad' ? 'Política de Privacidad' : 'Términos de Uso',
      modal: true,
      style: { width: '40vw' },
      breakpoints: { '960px': '75vw', '640px': '90vw' }
    },
    data: { tipo }
  });
};
</script>

<template>

  <footer class="bg-primary p-8 text-white">
    <div class="flex flex-col md:flex-row gap-6 justify-around items-center max-w-4xl mx-auto">
      <img :src="Logo" alt="" class="w-30 rounded-lg">
      <div class="flex flex-col items-center pt-2">
        <p class="text-lg font-medium">Rutas de Tortel</p>
        <p>Caleta Tortel, XI Región de Aysén</p>
        <p>Chile</p>
      </div>


    </div>
    <div class="flex gap-6 justify-center items-center my-6">
      <a href="#" class="underline underline-offset-3 text-center" @click.prevent="abrirLegal('terminos')">Términos de
        uso</a>
      <a href="#" class="underline underline-offset-3 text-center" @click.prevent="abrirLegal('privacidad')">Política de
        confidencialidad</a>
    </div>
    <p class="text-center text-sm">Rutas de Tortel 2026&copy; Todos los derechos reservados.</p>

  </footer>


</template>
