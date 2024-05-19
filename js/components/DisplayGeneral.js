import { calcTotalMinSec } from "../helper/calMinSec.js"
import ButtonReturn from "./ButtonReturn.js"

import Title from "./Title.js"

export default function DisplayGeneral(counter) {
    
    let $title
    
    if (location.hash === '#/amrap') {
        $title =  Title('AMRAP')
    } else if (location.hash === '#/fortime') {
        $title =  Title('FOR TIME')
    }
        
    
    let $minutesDisplay
    let $secondsDisplay
    let $app = document.querySelector('#app')
    $app.innerHTML = ""
    
    const $containerDisplay = document.createElement('div')
    $containerDisplay.classList.add('number-countDown') 
    $app.appendChild($title)
    ButtonReturn()
    $app.appendChild($containerDisplay)
   
    const time = calcTotalMinSec(counter)
            $minutesDisplay = time.minutes < 10 ? `0${time.minutes}` : `${time.minutes}`
            $secondsDisplay = time.secondsLeft < 10 ? `0${time.secondsLeft}` : `${time.secondsLeft}`
            $containerDisplay.innerHTML = `${$minutesDisplay} : ${$secondsDisplay}`
            $containerDisplay.classList.add('watch')

}