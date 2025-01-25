export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available")

    // percorre toda o agendamento não marcado
    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {

            // Percorre a lista e remove a class do elemento clicado
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            // Destaca o elemento 
            selected.target.classList.add("hour-selected")
        })
    })

}