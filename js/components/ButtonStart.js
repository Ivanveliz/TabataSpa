export default function ButtonStart() {
    let $buttonStart = document.createElement('button')
    $buttonStart.textContent = 'START'
    $buttonStart.classList.add('button-start')
    document.querySelector('#app').appendChild($buttonStart)
}