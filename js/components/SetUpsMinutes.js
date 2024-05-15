
import { calculeTotalSeconds } from "../helper/calculeTotalSeconds.js"


export default function SetUpsMinutes(callback) {

    let $containerSetUps = document.createElement('div')
    $containerSetUps.classList.add('container-set-ups')
    $containerSetUps.classList.add('emom')
    $containerSetUps.innerHTML = `
        <div class= "set-ups"> 
            <span class="span">Every</span>
                <input type="number" id="minutes">
            <span class="span">minutes</span>
        </div>
        <div class= "set-ups">
            <span class="span">for</span>
                <input type="number" id="rounds">
            <span class="span">Rounds</span>
        </div>
    `

    document.querySelector('#app').appendChild($containerSetUps)

    let minutes = document.querySelector('#minutes')
    let rounds = document.querySelector('#rounds')


    const updateAndCallback = () => {
        const minutesValue = parseFloat(minutes.value) || 1;
        const roundsValue = parseFloat(rounds.value) || 1;
        console.log(`Minutes: ${minutesValue}, Rounds: ${roundsValue}`);

        const totalrounds = minutesValue * roundsValue;
        let totalSec = calculeTotalSeconds(totalrounds)
        console.log(`Total Seconds: ${totalSec}`);
        callback(totalSec, roundsValue);
    }
    
    minutes.addEventListener('input', updateAndCallback)
    rounds.addEventListener('input', updateAndCallback)

}