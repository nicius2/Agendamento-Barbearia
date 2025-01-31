import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hourLoad } from "../forms/hours-load.js"
import { scheduleShow } from "../schedules/show.js"


const selectedDate = document.getElementById("date")
// Carregamento baseado no dia
export async function schedulesDay() {
    // Obtém a data do input
    const date = selectedDate.value

    // Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })
    
    // Exibe os agendamentos
    scheduleShow({ dailySchedules })
    
    // Carregamento o dia especifico
    hourLoad({ date, dailySchedules })
}
