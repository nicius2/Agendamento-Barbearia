import dayjs from "dayjs"

const selectDate = document.getElementById("date")
const form = document.querySelector("form")

const today = dayjs(new Date()).format("YYYY-MM-DD") // Dia atual

// Carregar a data atual e bloquear os dias passados
selectDate.value = today
selectDate.min = today

form.onsubmit = (event) => {
    // Impede o carregamento da pagina
    event.preventDefault()
}
