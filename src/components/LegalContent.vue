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
    <h3>Política de privacidad</h3>
    <p>En 'Rutas de Tortel' respetamos tu privacidad. Nuestro sitio utiliza herramientas de análisis como Google
      Analytics para conocer de forma anónima cómo las personas visitan y utilizan la página.</p>
    <p>Estos datos nos ayudan a mejorar la experiencia de nuestros usuarios, pero no contienen ninguna información
      personal identificable (como nombre, dirección o correo electrónico). La información recolectada incluye, por
      ejemplo:</p>
    <ul>
      <li>Páginas visitadas dentro del sitio</li>
      <li>Tiempo de permanencia</li>
      <li>Tipo de dispostivo y navegador</li>
    </ul>
    <p>Estos datos son procesados por Google Analytics, bajo sus propias políticas de privacidad, y no se comparten con
      terceros fuera de ese servicio. Al continuar navegando en nuestro sitio, aceptas el uso de cookies y datos
      anónimos para fines estadísticos y de mejora continua.</p>
    <p>Puedes obtener más información en la
      <a href="https://policies.google.com/privacy" target="_blank">Política de Privacidad de Google</a>
      Política de Privacidad de Google
    </p>
  </div>
  <div v-else>
    <h3>Términos de uso</h3>
    <ul>
      <li>Todas las imágenes presentes en el sitio son obra original de 'Rutas de Tortel' y están protegidas por las
        leyes de propiedad intelectual de Chile.</li>
      <li>Queda prohibida su reproducción total o parcial, la descarga para uso comercial y cualquier modificacion de
        estas sin autorización previa por escrito.</li>
      <li>Para consulta sobre el uso del material visual, por favor contáctanos.</li>
    </ul>
    <button @click="irATerminosCompletos" class="border border-primary" py-2 px-4>Leer más detalles</button>
  </div>
</template>
