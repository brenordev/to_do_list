import {items} from '../script/main.js'

const counter = document.getElementById('listItemCounter')

export const getItemCount = () => {
    const listItemsNumber = items.length
    if (listItemsNumber === 0) {
        counter.textContent = 'Não há itens na lista'
    } else if (listItemsNumber === 1) {
        counter.textContent = 'Você tem 1 item na lista'
    } else {
        counter.textContent = `Você tem ${listItemsNumber} itens na lista`
    }
}