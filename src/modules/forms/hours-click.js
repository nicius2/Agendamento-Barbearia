export function hoursClick() {
    // Somente os horarios disponiveis
    const hours = document.querySelectorAll(".hour-available")

    hours.forEach(( available ) => {
        available.addEventListener("click", (selected) => {
            // Remove a classe hour-selected de todas as li não selecionadas
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            // Adiciona a classe somente na li clicada
            selected.target.classList.add("hour-selected")
        })
    })
}