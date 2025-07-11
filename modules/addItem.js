const inputItem = document.getElementById('inputItem')
import { items, listRender, saveData } from "../script/main.js"

const form = document.getElementById('form')
const addedItemSound = new Audio('../assets/sounds/sound.mp3')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newItem = inputItem.value.trim()
    if (newItem === '') return
    items.push({ name: newItem, status: false })

    addedItemSound.volume = .4
    addedItemSound.play()
    
    saveData()
    listRender()

    inputItem.focus()
    inputItem.value = ''
})