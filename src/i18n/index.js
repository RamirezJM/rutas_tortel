import { createI18n } from 'vue-i18n'

const messages = {
  es: {
    nav: {
      inicio: 'Inicio',
      rutas: 'Rutas',
      contacto: 'Contacto',
    },
    rutas: {
      titulo: 'Nuestras Rutas',
      subtitulo: 'Selecciona una ruta para comenzar tu recorrido',
      ver_ruta: 'Ver ruta',
      hitos: 'Hitos',
      volver: 'Volver al inicio',
      introduccion: 'Sobre esta ruta',
    },

    en: {
      nav: {
        inicio: 'Home',
        rutas: 'Routes',
        contacto: 'Contact',
      },
      rutas: {
        titulo: 'Our Routes',
        subtitulo: 'Pick a route to begin your way',
        ver_ruta: 'To know route',
        hitos: 'Hitos',
        volver: 'Back to home',
        introduccion: 'About this route',
      },
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages,
})

export default i18n
