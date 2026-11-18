<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const dialogRef = inject('dialogRef');
const router = useRouter();
const tipo = dialogRef.value.data.tipo;

const irATerminosCompletos = () => {
  dialogRef.value.close();
  router.push('/terminos');
};
</script>

<template>
  <div v-if="tipo === 'privacidad'">
    <!-- <h3>Política de privacidad</h3> -->
    <p class="my-4 ">En '<span class="font-semibold">Rutas de Tortel</span>' respetamos tu privacidad. Nuestro
      sitio utiliza herramientas de análisis como
      Google
      Analytics para conocer de forma anónima cómo las personas visitan y utilizan la página.</p>
    <p class="my-4 ">Estos datos nos ayudan a mejorar la experiencia de nuestros usuarios, pero no contienen ninguna
      información
      personal identificable (como nombre, dirección o correo electrónico). La información recolectada incluye, por
      ejemplo:</p>
    <ul class="my-4 list-disc ms-4">
      <li>Páginas visitadas dentro del sitio</li>
      <li>Tiempo de permanencia</li>
      <li>Tipo de dispostivo y navegador</li>
    </ul>
    <p class="my-4">Estos datos son procesados por Google Analytics, bajo sus propias políticas de privacidad, y no se
      comparten con
      terceros fuera de ese servicio. Al continuar navegando en nuestro sitio, aceptas el uso de cookies y datos
      anónimos para fines estadísticos y de mejora continua.</p>
    <p class="my-4 ">Puedes obtener más información en la
      <a href="https://policies.google.com/privacy" target="_blank" class="underline underline-offset-3 ">Política de
        Privacidad de
        Google</a>.
    </p>
  </div>
  <div v-else>
    <!-- <h3>Términos de uso</h3> -->
    <ul class="list-disc ms-4">
      <li class="my-4">Todas las imágenes presentes en el sitio son obra original de '<span class="font-semibold">Rutas
          de Tortel</span>' y están
        protegidas por las
        leyes de propiedad intelectual de Chile.</li>
      <li class="my-4">Queda prohibida su reproducción total o parcial, la descarga para uso comercial y cualquier
        modificacion de
        estas sin autorización previa por escrito.</li>
      <li class="my-4">Para consulta sobre el uso del material visual, por favor contáctanos.</li>
    </ul>
    <button @click="irATerminosCompletos"
      class="border border-primary block mx-auto py-2 px-4 rounded-sm cursor-pointer hover:border-2 hover:border-gray-700">Leer
      más
      detalles</button>
  </div>
</template>
