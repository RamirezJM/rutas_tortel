<script setup>
// MapaInteractivo.vue
// Mapa Leaflet con markers personalizados, polyline y fitBounds.

import { ref } from 'vue'
import { LMap, LTileLayer, LMarker, LPopup, LPolyline } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'

const props = defineProps({
  hitos: {
    type: Array,
    required: true
  },
  colorRuta: {
    type: String,
    default: '#2c5f2e'
  }
})

const zoom = ref(15)
const centro = ref(
  props.hitos.length > 0
    ? props.hitos[0].coordenadas
    : [-34.5755, -71.0022]
)

const hitoActivo = ref(null)

// Array de coordenadas en orden — alimenta la polyline.
// Es el mismo array de hitos pero extrayendo solo las coordenadas.
const coordenadasRuta = props.hitos.map(h => h.coordenadas)

// Referencia al componente LMap para acceder a la instancia de Leaflet.
// Necesaria para llamar fitBounds sobre el mapa una vez montado.
const mapaRef = ref(null)

// Se ejecuta cuando el mapa termina de inicializarse.
// En ese momento calculamos los límites del conjunto de markers
// y ajustamos el zoom para que todos quepan en pantalla.
function onMapReady() {
  if (props.hitos.length < 2) return  // con un solo hito no tiene sentido

  // L.latLngBounds calcula el rectángulo que contiene todas las coordenadas
  const bounds = L.latLngBounds(coordenadasRuta)

  // fitBounds ajusta zoom y centro para mostrar todos los markers.
  // padding agrega margen interior para que los markers no queden
  // pegados al borde del mapa.
  mapaRef.value.leafletObject.fitBounds(bounds, { padding: [40, 40] })
}

function crearIcono(numero) {
  return L.divIcon({
    html: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 42" width="32" height="42">
        <ellipse cx="16" cy="41" rx="6" ry="2" fill="rgba(0,0,0,0.2)" />
        <path
          d="M16 0 C7.163 0 0 7.163 0 16 C0 28 16 42 16 42 C16 42 32 28 32 16 C32 7.163 24.837 0 16 0Z"
          fill="${props.colorRuta}"
        />
        <circle cx="16" cy="15" r="9" fill="white" opacity="0.9" />
        <text
          x="16" y="20"
          text-anchor="middle"
          font-size="10"
          font-weight="bold"
          font-family="sans-serif"
          fill="${props.colorRuta}"
        >${numero}</text>
      </svg>
    `,
    className: '',
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -42]
  })
}
</script>

<template>
  <div class="w-full h-96 rounded-lg overflow-hidden">

    <!--
      ref="mapaRef" conecta este elemento con la variable mapaRef del script.
      @ready se dispara cuando Leaflet termina de inicializar el mapa —
      es el momento correcto para llamar fitBounds, ya que antes
      el mapa no tiene dimensiones calculadas.
    -->
    <LMap ref="mapaRef" :zoom="zoom" :center="centro" :options="{ scrollWheelZoom: false }" class="w-full h-full"
      @ready="onMapReady">

      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' layer-type="base"
        name="OpenStreetMap" />

      <!--
        LPolyline dibuja la línea que conecta los hitos en orden.
        :lat-lngs recibe el array de coordenadas en secuencia.
        :weight es el grosor de la línea en píxeles.
        :opacity controla la transparencia.
        La línea va debajo de los markers porque se declara antes en el template.
      -->
      <LPolyline :lat-lngs="coordenadasRuta" :color="colorRuta" :weight="3" :opacity="0.7" />

      <LMarker v-for="(hito, index) in hitos" :key="hito.id" :lat-lng="hito.coordenadas" :icon="crearIcono(index + 1)"
        @click="hitoActivo = hito">
        <LPopup>
          <div class="min-w-48">
            <h3 class="font-semibold text-sm mb-1">{{ hito.nombre }}</h3>
            <p class="text-xs text-gray-600 mb-2">{{ hito.descripcion_breve }}</p>
            <router-link :to="`/ruta/${$route.params.rutaId}/hito/${hito.id}`"
              class="text-xs font-medium hover:underline" :style="`color: ${colorRuta}`">
              Ver más →
            </router-link>
          </div>
        </LPopup>
      </LMarker>

    </LMap>
  </div>
</template>
