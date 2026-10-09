import { onMounted } from 'vue'
import sal from 'sal.js'

export function useSal() {
  onMounted(() => {
    // once: false → la animación se repite si el usuario vuelve a la vista
    // threshold: 0.1 → el elemento anima cuando el 10% es visible
    sal({
      once: false,
      threshold: 0.1
    })
  })
}
