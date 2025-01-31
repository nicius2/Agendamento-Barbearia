import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        const data = await response.json()

        const dailySchedules = data.filter((schedules) => 
            dayjs(date).isSame(schedules.when, "day")
        )

        return dailySchedules
    } catch (error) {
        console.log(error)
        alert("Não foi possivel buscar o agendamento")
    }
}