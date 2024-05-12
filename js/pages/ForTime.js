import ButtonReturn from "../components/ButtonReturn.js";
import setUpsForTimeAmrap from "../components/SetUpsForTimeAmrap.js";
import ButtonStart from "../components/buttonStart.js";
export function forTime() {
    let $titleForTime = document.createElement('h2')
    $titleForTime.classList.add('title')
    $titleForTime.innerText = 'FOR TIME'
    
    document.getElementById('app').appendChild($titleForTime);
    ButtonReturn()
    setUpsForTimeAmrap()
    ButtonStart()
}