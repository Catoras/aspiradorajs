import { getUltimaPosicion, setUltimaPosicion, guardarDesempenio } from './entorno.js'
import data from '../../entorno.js'
export function inicializar(esPrimeraVez = false) {
  const posicion = data.ladoInicial
  // if (esPrimeraVez) {
  //   posicion = prompt("Cual es la posicion inicial de la aspiradora(I o D)?")
  //   posicion = posicion.toUpperCase()
  // } else {
  //   posicion = getUltimaPosicion()
  // }
  return posicion
}

export function dormir(ultimaPosicion, bateria, estado) {
  console.log(`Bateria Restante ${bateria}, ${estado}`);
  setUltimaPosicion(ultimaPosicion)
  guardarDesempenio(bateria, estado)
}

export function limpiar(posicion, bateria) {
  bateria -= data.costoLimpiar 
  console.log(`Limpiando el lado ${posicion}, bateria restante ${bateria}`);
  return bateria
}

export function desplazarse(posicion, bateria){
  posicion = posicion === 'I' ? 'D': 'I'
  bateria -= data.costoDesplazarse 
  console.log(`Desplazandose al lado ${posicion}, bateria restante ${bateria}`);
  return [posicion, bateria]
}

export function modoBateriaBaja(){
  console.log(`Modo bateria baja procediento a dormir`);
}

export function modoDescansar(){
  console.log(`No se encontro basura procediendo a dormir`);
}