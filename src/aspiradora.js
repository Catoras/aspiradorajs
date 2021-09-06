import { esPrimeraVez } from "./agents/entorno.js"
import { inicializar, dormir, limpiar } from "./agents/actuador.js"
import { estaSucio } from "./agents/sensor.js"

export function aspiradora() {
  let posicion = inicializar(esPrimeraVez());
  if (posicion === 'I' || posicion === 'D') {
    while (estaSucio(posicion)) {
      limpiar(posicion)
    }
    posicion = posicion === 'I' ? 'D': 'I'
    while (estaSucio(posicion)) {
      limpiar(posicion)
    }
  }
  dormir(posicion)
}
