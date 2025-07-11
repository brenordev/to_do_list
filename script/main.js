
const listItem = document.getElementById('listItem')
import { getItemCount } from '../modules/itemCount.js'

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
        })

        if (item.status) {
            li.classList.add('completed')

            const iconCompletedItemButton = completedItemButton.querySelector('i')
            completedItemButton.style.backgroundColor = '#A6AEBF'
            iconCompletedItemButton.classList.toggle('fa-check')
            iconCompletedItemButton.classList.toggle('fa-rotate-left')
        }

        // Remove item from list
        const removeItemButton = li.querySelector('#removeItemButton')
        removeItemButton.addEventListener('click', () => {
            items.splice(index, 1)
            saveData()
            listRender()
            console.log('Removeu item')
        })

        listItem.appendChild(li)
    })

    saveData()
    getItemCount()
}

