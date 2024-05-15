import ButtonReturn from "../components/ButtonReturn.js"
import SetTimeRest from "../components/SetTImeRest.js"
import SetTimeWork from "../components/SetTimeWork.js"

import TotalMinutes from "../components/TotalMinutes.js"
import ButtonStart from "../components/ButtonStart.js"

export default function tabata() {
    document.getElementById('app').innerHTML = ""
    const $titleTabata = document.createElement('h2')
    $titleTabata.textContent = 'TABATA'
    $titleTabata.classList.add('title')
    document.querySelector('#app').appendChild($titleTabata)
    ButtonReturn()
    
    SetTimeWork()
    SetTimeRest()
    TotalMinutes()
    ButtonStart() 
    console.log(location.hash)
}