import DisplayCountDown from "../components/DisplayCountDown.js"
import handleCoutnDown from "./handleCountDown.js"
import playSound from "./playSound.js"

export default function  countDown(totalsec , roundsValue, work, rest) {
    const sound = playSound();
    const $containerDisplay = DisplayCountDown()
    let $app = document.querySelector('#app')
    let $countDown = 10

    $containerDisplay.textContent = $countDown;
    $app.appendChild($containerDisplay);

    function startCountDown() {
        if ($countDown > 1) {
            $countDown--;
            $containerDisplay.textContent = $countDown;
            if ($countDown === 3) {
                sound.play()
            }
        } else {
            clearInterval(interval); 
            handleCoutnDown(location.hash, totalsec, roundsValue, work, rest); 
        }
    }
    let interval = setInterval(startCountDown, 1000);

}
    
