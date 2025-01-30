import { hourLoad } from "../forms/hours-load.js"


const selectedDate = document.getElementById("date")
// Carregamento baseado no dia
export function schedulesDay() {

    const date = selectedDate.value
    // Carregamento de horario
    hourLoad({ date })
}
