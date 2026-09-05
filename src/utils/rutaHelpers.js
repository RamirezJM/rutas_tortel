import { rutas } from '@/data/rutas'

export function getRutaById(id) {
  return rutas.find((ru) => ru.id === id) || null
}

export function getHitoById(rutaId, hitoId) {
  const ruta = getRutaById(rutaId)
  if (!ruta) return null
  return ruta.hitos.find((h) => h.id === Number(hitoId)) || null
}

export function getHitosAdyacentes(rutaId, hitoId) {
  const ruta = getRutaById(rutaId)
  if (!ruta) return { anterior: null, siguiente: null }

  const index = ruta.hitos.findIndex((h) => h.id === Number(hitoId))
  return {
    anterior: index > 0 ? ruta.hitos[index - 1] : null,
    siguiente: index < ruta.hitos.length - 1 ? ruta.hitos[index + 1] : null,
  }
}
