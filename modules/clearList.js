import { items, listRender, saveData } from "../script/main.js"

const clearButton = document.getElementById('clearButton')

clearButton.addEventListener('click', () => {
    if (confirm('Deseja realmente limpar toda a lista?')) {
        items.length = 0
        saveData()
        listRender()
    }
})
