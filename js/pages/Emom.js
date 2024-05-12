import ButtonReturn from "../components/ButtonReturn.js"
import ButtonStart from "../components/buttonStart.js"
import SetUpsMinutes from "../components/SetUpsMinutes.js"

export default function emom() {
    const $titleEmom = document.createElement('h2')
    $titleEmom.textContent = 'EMOM'
    $titleEmom.classList.add('title')
    document.querySelector('#app').appendChild($titleEmom)
    ButtonReturn()
    SetUpsMinutes()
    ButtonStart()
}