import ButtonReturn from "../components/ButtonReturn.js"
import ButtonStart from "../components/ButtonStart.js"
import SetUpsTabata from "../components/SetUpsTabata.js"

export default function tabata() {
    document.getElementById('app').innerHTML = ""
    const $titleTabata = document.createElement('h2')
    $titleTabata.textContent = 'TABATA'
    $titleTabata.classList.add('title')
    document.querySelector('#app').appendChild($titleTabata)
    ButtonReturn()
    SetUpsTabata(function ( rounds, workTime, restTime, totalSec) {
        const existingButtonStart = document.querySelector('.button-start');
        if (existingButtonStart) {
            existingButtonStart.remove();
        }
        ButtonStart({
            roundsValue: rounds,
            work: workTime,
            rest: restTime,
            totalSec: totalSec,
        }); 
       
    })

}