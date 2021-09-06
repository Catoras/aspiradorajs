import  { aspiradora }  from "./aspiradora.js"

iniciar()

function iniciar() {
  try {
    console.log("Iniciando aspiradora")
    aspiradora()
    console.log("Aspiradora Dormida")
  } catch (error) {
    console.log(error)
  }
}
