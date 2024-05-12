import DisplayCountDown from "../components/DisplayCountDown.js"
import handleCoutnDown from "./handleCountDown.js"

export default function  countDown(totalsec) {
    
    const $containerDisplay = DisplayCountDown()
    let $app = document.querySelector('#app')
    let $countDown = 10

    $containerDisplay.textContent = $countDown;
    $app.appendChild($containerDisplay);

    function startCountDown() {
        if ($countDown > 1) {
            $countDown--;
            $containerDisplay.textContent = $countDown;
        } else {
            clearInterval(interval); 
            
            handleCoutnDown(location.hash, totalsec); 
        }
    }
    let interval = setInterval(startCountDown, 1000);

}
    
