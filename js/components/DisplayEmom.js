import ButtonReturn from "./ButtonReturn.js"
import Title from "./Title.js"

export function DisplayEmom(counter, rounds, totalRounds) {

    let $title = Title('EMOM')

    let $containerDisplay = document.createElement('div')
    $containerDisplay.classList.add('container-display')
    $containerDisplay.innerHTML = `
    <p class="number-countDown">${counter} </p>
    <p class="info-text">Round number: ${rounds} </p>
    <p class="info-text">Total Rounds: ${totalRounds} </p>

    `
    let $app = document.querySelector('#app')
    
    $app.innerHTML = ""
    $app.appendChild($title)
    ButtonReturn()
    $app.appendChild($containerDisplay)
}