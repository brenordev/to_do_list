import { items, listRender, saveData } from "../script/main.js"


let ascendingOrder = false

sortAlphaBtn.addEventListener('click', (e) => {
    e.preventDefault()

    ascendingOrder = !ascendingOrder
    const iconeFiltro = sortAlphaBtn.querySelector('i')

    items.sort((a, b) => {
        return ascendingOrder
            ? a.name.localeCompare(b.item)
            : b.name.localeCompare(a.name)
    })

    iconeFiltro.classList.toggle('fa-arrow-up-a-z')
    iconeFiltro.classList.toggle('fa-arrow-up-z-a')

    saveData()
    listRender()
})


const filterCompletedBtn = document.getElementById('filterCompletedBtn')
let filterStatus = false

filterCompletedBtn.addEventListener('click', () => {
    filterStatus = !filterStatus
    if (filterStatus) {
        const completed = items.filter(item => item.status)
        const notCompleted = items.filter(item => !item.status)
        const filteredListOfItemsCompleted = [...completed, ...notCompleted]

        listRender(filteredListOfItemsCompleted)
    } else {
        listRender()
    }
});