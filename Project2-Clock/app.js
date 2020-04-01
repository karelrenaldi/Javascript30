const handSecond = document.querySelector(".second") ;
const handMinute = document.querySelector(".minute") ;
const handHour = document.querySelector(".hour") ;
const now = new Date() ;
let second = now.getSeconds() + 1 ;
let minute = now.getMinutes() * 60 + second ;
let hour = now.getHours() * 3600 + minute ;
//Start
handSecond.style.transform = `rotate(${(6 * (second % 60) + 90) % 360}deg)` ;
handMinute.style.transform = `rotate(${(6 * ((minute / 60) % 60) + 90) % 360}deg)` ;
handHour.style.transform = `rotate(${(15 * ((hour / 3600) % 24) + 270) % 360}deg)` ;
//interval
setInterval(() => {
    hour += 1 ;
    minute += 1 ;
    second += 1 ;
    handSecond.style.transform = `rotate(${(6 * (second % 60) + 90) % 360}deg)` ;
    handMinute.style.transform = `rotate(${(6 * ((minute / 60) % 60) + 90) % 360}deg)` ;
    handHour.style.transform = `rotate(${(15 * ((hour / 3600) % 24) + 270) % 360}deg)` ;
}, 1000) ;