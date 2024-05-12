import ButtonReturn from "../components/ButtonReturn.js";
import display from "../components/DisplayClock.js";

export default function clock() {
    document.getElementById('app').innerHTML = ""
    const $titleClock = document.createElement('h2')
    $titleClock.innerHTML = 'Reloj'
    $titleClock.classList.add('title')
    document.getElementById('app').appendChild($titleClock);
    ButtonReturn()
    document.getElementById('app').appendChild(display())
    console.log(location.hash)
}