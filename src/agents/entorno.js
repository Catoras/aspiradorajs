import { storage } from "../utils/storage.js"

export function esPrimeraVez() {
  const posicion = storage.get('posicion')
  return (posicion === null) ? true : false
}

export function getUltimaPosicion() {
  const posicion = storage.get('posicion')
  return posicion
}

export function setUltimaPosicion(posicion) {
  storage.set('posicion', posicion)
}