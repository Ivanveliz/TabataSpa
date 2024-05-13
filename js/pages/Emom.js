import ButtonReturn from "../components/ButtonReturn.js"
import ButtonStart from "../components/ButtonStart.js"
import SetUpsMinutes from "../components/SetUpsMinutes.js"

export default function Emom() {
    document.getElementById('app').innerHTML = ""
    const $titleEmom = document.createElement('h2')
    $titleEmom.textContent = 'EMOM'
    $titleEmom.classList.add('title')
    document.querySelector('#app').appendChild($titleEmom)
    ButtonReturn()
    SetUpsMinutes()
    ButtonStart()
    
}