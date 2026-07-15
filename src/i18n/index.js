import { createI18n } from 'vue-i18n'

const messages = {
  es: {
    nav: {
      inicio: 'Inicio',
      rutas: 'Rutas',
      contacto: 'Contacto',
    },
    en: {
      nav: {
        inicio: 'Home',
        rutas: 'Routes',
        contacto: 'Contact',
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
