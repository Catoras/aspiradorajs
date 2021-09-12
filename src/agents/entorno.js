import { storage } from "../utils/storage.js"
import data from '../../entorno.js'

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

export function guardarDesempenio(bateriaFinal, estadoFinal) {
  const desempenio = storage.get('desempenio')
  const ultimoDesempenio = {
    estadoFinal,
    bateriaFinal,
    ...data
  }
  const  desempenioResultante = 
    (desempenio !== null) 
      ? [...desempenio, ultimoDesempenio] 
      : [ultimoDesempenio]
  storage.set('desempenio', desempenioResultante)
}
