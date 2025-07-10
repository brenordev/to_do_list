import { items, listRender, saveData } from "../script/main.js"

const filterCompletedBtn = document.getElementById('filterCompletedBtn')

let ascendingOrder = false

sortAlphaBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(ascendingOrder)
    
    ascendingOrder = !ascendingOrder
    const iconeFiltro = sortAlphaBtn.querySelector('i')
    
    items.sort((a, b) => {
        return ascendingOrder
            ? a.name.localeCompare(b.item)
            : b.name.localeCompare(a.name)
        }
    )

    iconeFiltro.classList.toggle('fa-arrow-up-a-z')
    iconeFiltro.classList.toggle('fa-arrow-up-z-a')
    
    saveData()
    listRender()
    console.log(ascendingOrder)
})

filterCompletedBtn.addEventListener('click', () => {
    const completed = items.filter(item => item.status);
    const notCompleted = items.filter(item => !item.status);

    const novaLista = [...completed, ...notCompleted];

    listRender(novaLista);
    saveData();

    console.log("Clicado");
});