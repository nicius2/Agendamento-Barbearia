import dayjs from "dayjs.js"
import { openingHours } from "../../utils/openingHours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules}) {


    // se a hora ja não foi agendada
    const unavailable = dailySchedules.map((schedules) => 
        dayjs(schedules.when).format("HH:mm")
    )

    const opening = openingHours.map((hour) => {
        // Recupera somente a hora
        const [scheduleHour] = hour.split(":")

        // Adiciona a hora na date e verifica se estar no passdo
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        // Verifica se a hora ainda não foi selecionada e não estar no passado
        const available = !unavailable.includes(hour) && !isHourPast

        return {
            hour, 
            available
        }
    })

    // Renderizando o horario
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add( available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if(hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if(hour === "13:00") {
            hourHeaderAdd("Tarder")
        } else if(hour === "18:00") {
            hourHeaderAdd("Noite")
        }
        hours.append(li)
    })

    hoursClick()
}



function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title
    hours.append(header)
}