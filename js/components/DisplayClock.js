import updateClock from "../helper/updateClock.js"

export default function DisplayClock() {

    let $containerDisplay = document.createElement('div')
    $containerDisplay.id = 'display'
    $containerDisplay.classList.add('container-display')
    $containerDisplay.classList.add('watch')

    setInterval(() => {
        updateClock($containerDisplay);
    }, 1000);
    
    (updateClock($containerDisplay))
    updateClock($containerDisplay);
    
    return $containerDisplay
}