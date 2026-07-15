export const rutas = [
  {
    id: 'ruta1',
  },
]

export function getRutaById(id) {
  return rutas.find((ru) => ru.id === id) || null
}
