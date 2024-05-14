import { calcTotalMinSec } from "../helper/calMinSec.js"

export default function DisplayGeneral(value) {
    
    let countDown = 0
    let minutesDisplay
    let secondsDisplay
    let $app = document.querySelector('#app')
    $app.innerHTML = ""
    const $containerDisplay = document.createElement('div')
    $containerDisplay.classList.add('number-countDown')
    $app.appendChild($containerDisplay)
    console.log($containerDisplay)
    console.log(countDown)
    setInterval(function () {
        if (countDown < value) {
            countDown++
            const time = calcTotalMinSec(countDown)
            minutesDisplay = time.minutes < 10 ? `0${time.minutes}` : `${time.minutes}`
            secondsDisplay = time.secondsLeft < 10 ? `0${time.secondsLeft}` : `${time.secondsLeft}`
            $containerDisplay.innerHTML = `${minutesDisplay} : ${secondsDisplay}`
           
        } else {
            clearInterval()
            $containerDisplay.innerHTML = '<p class="work-out-end">Workout End!</p>'
        }
    }, 1000)
}