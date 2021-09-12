import { esPrimeraVez } from "./agents/entorno.js"
import { inicializar, dormir, limpiar, desplazarse, modoBateriaBaja, modoDescansar } from "./agents/actuador.js"
import { estaSucio, bateriaNoEsBaja } from "./agents/sensor.js"
import data from '../entorno.js'


export function aspiradora() {
  let posicion = inicializar(esPrimeraVez());
  let bateria = data.bateriaInicial;
  let intentos = 0;
  const basura = [data.basuraIzq, data.basuraDer]
  const intentosVacios = data.intentosVacios;
  let estado = "No Finalizado"

  if (posicion !== 'I' && posicion !== 'D') return
  while(bateriaNoEsBaja(bateria)) {
    if (!estaSucio(posicion, basura)) intentos++
    if (intentos >= intentosVacios) {
      modoDescansar();
      estado = "Finalizado por objetivo completado"
      break
    }

    while (estaSucio(posicion, basura)) {
      if(!bateriaNoEsBaja(bateria)) break
      intentos = 0
      bateria = limpiar(posicion, bateria)
    }

    [posicion, bateria]= desplazarse(posicion, bateria)
  }

  if (!bateriaNoEsBaja(bateria)) {
    modoBateriaBaja()
    estado = "Finalizado por bateria baja"
  }

  dormir(posicion, bateria, estado)
}

