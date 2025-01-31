import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
    try {
        // Fazendo a requisição
        const reponse = await fetch(`${apiConfig.baseURL}/schedules`)

        // Converte para JSON
        const data = await reponse.json()

        // Filtra os agendamentos pelo dia selecionado.
        const dailyShedules = data.filter((schedule) => 
            dayjs(data).isSame(schedule.when, "day")
        )

        return dailyShedules
    } catch (error) {
        console.log(error)
        alert("Não foi possivel buscar os agendamentos do dia selecionado.")
    }
}