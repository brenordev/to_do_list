
const listItem = document.getElementById('listItem')
import { getItemCount } from '../modules/itemCount.js'
// import sound from '../assets/sounds/sound.mp3'

const addedItemSound = new Audio('../assets/sounds/sound.mp3')
export let items = []
window.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('toDoList')
    if (data) {
        items = JSON.parse(data)
    }
    listRender()
})

export const saveData = () => {
    localStorage.setItem('toDoList', JSON.stringify(items))
}

export const listRender = () => {
    listItem.innerHTML = ''
    items.forEach((item, index) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <div class="item-info">
                <p id="textItem">${item.name}</p>
            </div>
            <div class="buttons-item">
                <button id="removeItemButton" class="remove-item-button">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <button id="completedItemButton" class="completed-item-button">
                    <i class="fa-solid fa-check"></i>
                </button>
            </div>
        `

        // Mark item list as complete
        const completedItemButton = li.querySelector('#completedItemButton')
        completedItemButton.addEventListener('click', () => {

            item.status = !item.status
            saveData()
            listRender()

            console.log(`${items[index].name} removido da lista`)
        })

        if (item.status) {
            li.classList.add('completed');
            addedItemSound.volume = .4
            addedItemSound.play()
        }


        listItem.appendChild(li)
    })
    saveData()
    getItemCount()
}


console.log(addedItemSound);


export default function removeItem(index) {
    items.splice(index, 1)
    saveData()
    listRender()
}

// function removerItem(indice) {
//     items.splice(indice, 1)
//     salvarDados()
//     renderizarLista()
// }