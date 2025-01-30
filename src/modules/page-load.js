import { schedulesDay } from "./schedules/load.js"

// Toda vez que carregar a pagina essa função é carregada
document.addEventListener("DOMContentLoaded", function() {
    schedulesDay()
})