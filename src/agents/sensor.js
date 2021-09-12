import data from '../../entorno.js'

export function estaSucio(posicion, basura) {
  if (posicion === 'I') {
    return basura[0]-- >= 0 ? true : false
  } else {
    return basura[1]-- >= 0 ? true : false
  }
}

export function bateriaNoEsBaja(bateriaActual) {
  return bateriaActual > data.bateriaCritica
}