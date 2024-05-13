import countDown from "../helper/countdown.js"


export default function ButtonStart(totalsec) {
    let $buttonStart = document.createElement('button')
    $buttonStart.id = 'button-start'
    $buttonStart.textContent = 'START'
    $buttonStart.classList.add('button-start')

    document.querySelector('#app').appendChild($buttonStart)
  

    document.querySelector('#button-start').addEventListener('click', e => {
        countDown(totalsec)
        
    })
    
}