import { calcTotalMinSec } from "../helper/calMinSec.js"
import ButtonReturn from "./ButtonReturn.js"
import Title from "./Title.js"

export default function DisplayTabataWork(rounds, counterWork, counterRest, totalSec) {
    console.log(totalSec)
    let $title = Title('TABATA')

    let $containerDisplay = document.createElement('div')
    $containerDisplay.classList.add('container-display')
    let time = calcTotalMinSec(totalSec)

    let $minutesDisplay = time.minutes < 10 ? `0${time.minutes}` : `${time.minutes}`
    let $secondsDisplay = time.secondsLeft < 10 ? `0${time.secondsLeft}` : `${time.secondsLeft}`

    let $counterBrowser = counterWork === 0 ? counterRest : counterWork
    
    let $titlework = document.createElement('h3')
        $titlework.classList.add('title')
        $titlework.innerHTML = counterWork === 0 ? `Rest` : `Work`

    $containerDisplay.innerHTML = ""
    $containerDisplay.innerHTML = `
            <p class="number-countDown">${$counterBrowser} </p>
            <p class="info-text">Round number: ${rounds} </p>
            <p class="info-text">Total Time:  ${$minutesDisplay} : ${$secondsDisplay}</p>
            `

    
    
    let $app = document.querySelector('#app')
    
    $app.innerHTML = ""
    $app.appendChild($title)
    ButtonReturn()
    $app.appendChild($titlework)
    $app.appendChild($containerDisplay)

}

