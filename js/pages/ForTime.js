import ButtonReturn from "../components/ButtonReturn.js";
import setUpsForTime from "../components/SetUpsForTime.js";
export function forTime() {
    let $titleForTime = document.createElement('h2')
    $titleForTime.classList.add('title')
    $titleForTime.innerText = 'For Time'
    
    document.getElementById('app').appendChild($titleForTime);
    ButtonReturn()
    setUpsForTime()
}