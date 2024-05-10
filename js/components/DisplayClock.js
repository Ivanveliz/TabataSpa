import updateClock from "../../helper/updateClock.js"

export default function display() {

    let $containerDisplay = document.createElement('div')
    $containerDisplay.id = 'display'
    $containerDisplay.classList.add('container-display')

    setInterval(() => {
        updateClock($containerDisplay);
    }, 1000);
    
    (updateClock($containerDisplay))
    updateClock($containerDisplay);
    
        return $containerDisplay
}