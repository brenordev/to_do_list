const inputItem = document.getElementById('inputItem')
import { items, listRender, saveData } from "../script/main.js"

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newItem = inputItem.value.trim()
    if (newItem === '')  return
    items.push({name: newItem, status: false})
    
    saveData()
    listRender()
    
    inputItem.focus()
    inputItem.value = ''
})