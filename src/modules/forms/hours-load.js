import dayjs from "dayjs"
import { openingHous } from "../../utils/openingHours.js"

const hours = document.getElementById("hours")

export function hourLoad({ date }) {
    const opening = openingHous.map((hour) => {
        // Recupera somente a hora
        const [scheduleHour] = hour.split(":")

        // Adiciona a hora na data e verifica se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        return {
            hour,
            available: isHourPast,
        }
    })

    // Renderiza os horarios
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour
        hours.append(li)
    })
}