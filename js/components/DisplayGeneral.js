import { calcTotalMinSec } from "../helper/calMinSec.js"
import ButtonReturn from "./ButtonReturn.js"

export default function DisplayGeneral(value, roundsValue) {
    console.log(roundsValue)
    let countDown = 0
    let minutesDisplay
    let secondsDisplay
    let $app = document.querySelector('#app')
    $app.innerHTML = ""
    const $containerDisplay = document.createElement('div')
    $containerDisplay.classList.add('number-countDown')
    $app.appendChild($containerDisplay)

    setInterval(function () {
        if (location.hash === '#/fortime') {
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
        } else if (location.hash === '#/amrap') {
            
            if (value > 0 ) {
                value --
                const time = calcTotalMinSec(value)

                minutesDisplay = time.minutes < 10 ? `0${time.minutes}` : `${time.minutes}`
                secondsDisplay = time.secondsLeft < 10 ? `0${time.secondsLeft}` : `${time.secondsLeft}`
                $containerDisplay.innerHTML = `${minutesDisplay} : ${secondsDisplay}`
               
            } else {
                clearInterval()
                $containerDisplay.innerHTML = '<p class="work-out-end">Workout End!</p>'
                
            }
        } else if (location.hash === '#/emom') {
            value -- 
            const time = calcTotalMinSec(value)
            console.log(roundsValue)
                minutesDisplay = time.minutes < 10 ? `0${time.minutes}` : `${time.minutes}`
                secondsDisplay = time.secondsLeft < 10 ? `0${time.secondsLeft}` : `${time.secondsLeft}`
                $containerDisplay.innerHTML = `${minutesDisplay} : ${secondsDisplay}`
        }
        
    }, 1000)
    ButtonReturn()
}