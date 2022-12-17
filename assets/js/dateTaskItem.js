import {hour, minute, second, textDate} from './time';

const textDateTask = document.querySelector('#dateItemList');

textDateTask.innerHtml = `${hour.value}`;
console.log(textDateTask)

