import DisplayCountDown from "../components/DisplayCountDown.js"
import AudioPlayer from "./AudioPlayer.js"
import handleCoutnDown from "./handleCountDown.js"

export default function  countDown(totalsec) {
    let startAudio = new AudioPlayer("../../js/helper/sounds/start.mp3")
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
                startAudio.play()
            }
        } else {
            clearInterval(interval); 
            
            handleCoutnDown(location.hash, totalsec); 
        }
    }
    let interval = setInterval(startCountDown, 1000);

}
    
