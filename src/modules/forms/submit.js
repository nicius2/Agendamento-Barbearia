import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const selectedName = document.getElementById("client")

// Date atual para o input
const today = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual
selectedDate.value = today

// Data minima disponivel
selectedDate.min = today

form.onsubmit = async (event) => {
    // Previne o comportamento padrão de carregar a página
    event.preventDefault()

    try {
        // Recuperando o nome do cliente
        const name = selectedName.value.trim()

        if(!name) {
           return alert("Informe o nome do cliente!")
        }

        const hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected) {
            return alert("Selecione a hora.")
        }
        
        // Recuperar somente a hora
        const [hour] = hourSelected.innerHTML.split(":")

        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um ID
        const id = new Date().getTime()

        await scheduleNew({
            id, 
            name,
            when,
        })
    } catch (error) {
        alert("Não foi possivel realizar o agendamento")
        console.log(error)
    }
}   