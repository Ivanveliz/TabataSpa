export default function DisplayCountDown() {
    let $app = document.querySelector('#app')
    $app.textContent = ""
    
    let $containerDisplay = document.createElement('div')
    $containerDisplay.id = 'displayCountDown'
    $containerDisplay.classList.add('number-countDown')
    
    return $containerDisplay
}