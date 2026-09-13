import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { createHead } from '@unhead/vue/client'
import 'leaflet/dist/leaflet.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import './assets/main.css'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(i18n)
app.use(head)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'false',
    },
  },
})

app.mount('#app')
