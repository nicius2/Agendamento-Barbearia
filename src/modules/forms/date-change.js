import { schedulesDay } from "../schedules/load.js"

// Seleciona o input de date
const selectedDate = document.getElementById("date")

selectedDate.onchange = () => schedulesDay()