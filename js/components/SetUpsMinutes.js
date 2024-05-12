import SetUpsRounds from "./SetUpsRounds.js"

export default function SetUpsMinutes() {
    let $containerSetUps = document.createElement('div')
    $containerSetUps.classList.add('container-set-ups')
    $containerSetUps.classList.add('set-ups')
    $containerSetUps.innerHTML = `

        <span class="span">Every</span>
            <input type="number">
        <span class="span">minutes</span>   
    `
   
    document.querySelector('#app').appendChild($containerSetUps)
    
    SetUpsRounds()
    }
