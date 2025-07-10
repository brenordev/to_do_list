const timeView = document.getElementById('timeView')
const dateView = document.getElementById('dateView')

function getPeriodOfDay() {
    const hour = new Date().getHours()
        if (hour >= 0 && hour < 6) return "madrugada"
        if (hour >= 6 && hour < 12) return "manhã"
        if (hour >= 12 && hour < 18) return "tarde"
    return "noite"
}

export const getCurrentDate = () => {  
    const weekDay = [
        'Domingo',
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sábado'
    ]

    const data = new Date()
    const getWeekDay = data.getDay()
    const day = data.getDate()
    const month = data.getMonth() + 1
    const year = data.getFullYear()
    const formattedDate = `
        ${day.toString().padStart(2, '0')}/
        ${month.toString().padStart(2, '0')}/
        ${year} - ${weekDay[getWeekDay]}
    `
    dateView.textContent = formattedDate
}

const getCurrentTime = () => {
    const data = new Date()
    const formattedTime =  data.toLocaleTimeString()
    timeView.textContent = formattedTime
}

getCurrentTime()
getCurrentDate()
setInterval(getCurrentTime, 1000) 
setInterval(getCurrentDate, 1000) 
