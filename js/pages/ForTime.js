import ButtonReturn from "../components/ButtonReturn.js";
import setUpsForTimeAmrap from "../components/SetUpsForTimeAmrap.js";
import ButtonStart from "../components/ButtonStart.js";


export function forTime() {
    document.getElementById('app').innerHTML = ""
    let $titleForTime = document.createElement('h2')
    $titleForTime.classList.add('title')
    $titleForTime.innerText = 'FOR TIME'
    
    document.getElementById('app').appendChild($titleForTime);
    ButtonReturn()
    
    setUpsForTimeAmrap(function (totalSec) {
        const existingButtonStart = document.querySelector('.button-start');
        if (existingButtonStart) {
            existingButtonStart.remove();
        }
        ButtonStart({totalSec});
    });
         
}