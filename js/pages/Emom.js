import ButtonReturn from "../components/ButtonReturn.js"
import ButtonStart from "../components/ButtonStart.js"
import SetUpsEmom from "../components/SetUpsEmom.js"


export default function Emom() {
    document.getElementById('app').innerHTML = ""
    const $titleEmom = document.createElement('h2')
    $titleEmom.textContent = 'EMOM'
    $titleEmom.classList.add('title')
    document.querySelector('#app').appendChild($titleEmom)
    ButtonReturn()

    SetUpsEmom(function(totalSec, roundsValue) {    
        const existingButtonStart = document.querySelector('.button-start');
        if (existingButtonStart) {
            existingButtonStart.remove();
        }
        ButtonStart({totalSec, roundsValue});
    });
    
    
}