import { calcTotalMinSec } from "../helper/calMinSec.js"


export default function SetUpsTabata(callback) {

    let $containerSetUps = document.createElement('div')
    $containerSetUps.classList.add('container-set-ups')
    $containerSetUps.innerHTML = `
        <div class= "set-ups"> 
            <span class="span">For</span>
                <input type="number" id="rounds-tabata">
            <span class="span">Rounds</span>
        </div>
        <div class= "set-ups">
            <span class="span">Work</span>
                <input type="number" id="work-tabata">
            <span class="span">Seconds</span>
        </div>
        <div class= "set-ups"> 
        <span class="span">Rest</span>
            <input type="number" id="rest-tabata">
        <span class="span">Seconds</span>
    </div>

    <div class="info-text"><span id="total-time"> Tiempo total: 00:00 </span></div>
    `

    document.querySelector('#app').appendChild($containerSetUps)
    let rounds = document.querySelector('#rounds-tabata')
    let work = document.querySelector('#work-tabata')
    let rest = document.querySelector('#rest-tabata')
    let $totalTimeElement = document.querySelector('#total-time')
    let roundsValue, workValue, restValue, totalSec;
     
    function updateTotalWork() {
        roundsValue = parseInt(rounds.value) || 1;
        workValue = parseInt(work.value) || 0;
        restValue = parseInt(rest.value) || 0;

        totalSec = parseFloat((workValue + restValue) * roundsValue)
        let totalTime = calcTotalMinSec(totalSec)
        let $minutesBrowser = totalTime.minutes < 10 ? `0${totalTime.minutes}`: `${totalTime.minutes}`
        let $secondsBrowser = totalTime.secondsLeft < 10 ? `0${totalTime.secondsLeft}` : `${totalTime.secondsLeft}`
        
        $totalTimeElement.textContent = `Total time: ${$minutesBrowser}: ${$secondsBrowser}`
        callback(roundsValue, workValue, restValue, totalSec)
    }
    rounds.addEventListener('input', updateTotalWork)
    work.addEventListener('input', updateTotalWork)
    rest.addEventListener('input', updateTotalWork)


}
