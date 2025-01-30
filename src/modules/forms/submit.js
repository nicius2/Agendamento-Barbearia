import dayjs from "dayjs"

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
}   