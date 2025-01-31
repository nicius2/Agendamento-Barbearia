import dayjs from "dayjs"
import { openingHous } from "../../utils/openingHours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hourLoad({ date, dailySchedules }) {
    // Limpa a lista de horários
    hours.innerHTML = ""

    const unavailableHours = dailySchedules.map((schedule) => 
    dayjs(schedule.when).format("HH:mm"))

    const opening = openingHous.map((hour) => {
        // Recupera somente a hora
        const [scheduleHour] = hour.split(":")

        // Adiciona a hora na data e verifica se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const available = !unavailableHours.includes(hour) && !isHourPast

        return {
            hour,
            available
        }
    })

    // Renderiza os horarios
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if (hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    // Seleciona somente a hora clicada
    hoursClick()
}

// Separando os horarios por periodo
function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}