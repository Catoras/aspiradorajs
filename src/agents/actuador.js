import { getUltimaPosicion, setUltimaPosicion } from './entorno.js'

export function inicializar(esPrimeraVez = false) {
  let posicion 
  if (esPrimeraVez) {
    posicion = prompt("Cual es la posicion inicial de la aspiradora(I o D)?")
    posicion = posicion.toUpperCase()
  } else {
    posicion = getUltimaPosicion()
  }
  return posicion
}

export function dormir(ultimaPosicion) {
  setUltimaPosicion(ultimaPosicion)
}

export function limpiar(posicion) {
  console.log("Limpiando el lado "+posicion);
}